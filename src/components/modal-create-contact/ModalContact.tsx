import React, {FunctionComponent, useEffect} from 'react'
import styles from './ModalContact.module.sass'
import PrimaryButton from "../primary-button/PrimaryButton"
import SecondaryButton from "../secondary-button/SecondaryButton"
import InputField from "./input-field/InputField"
import {
    validateBirthDate,
    validateJobTitle,
    validateName, validatePhoneNumber
} from "../../utils/validation"
import useFormField from "../../hooks/useFormField"
import {Contact} from "../../service/Types"

interface IModalCreateContactProps {
    isVisible: boolean
    title: string
    close: () => void
    action: (contact: Contact) => void
    contact?: Contact
}

const ModalContact: FunctionComponent<IModalCreateContactProps> = (
    {isVisible, title, close, action, contact}) => {

    const name = useFormField(contact?.name || '', validateName)
    const jobTitle = useFormField(contact?.jobTitle || '', validateJobTitle)
    const mobilePhone = useFormField(contact?.mobilePhone || '+375', validatePhoneNumber)
    const birthDate = useFormField(contact?.birthDate || '', validateBirthDate)

    useEffect(() => {
        name.setValue(contact?.name || '')
        jobTitle.setValue(contact?.jobTitle || '')
        mobilePhone.setValue(contact?.mobilePhone || '+375')
        birthDate.setValue(contact?.birthDate || '')
    }, [contact])

    const closeModal = () => {
        name.setError('')
        jobTitle.setError('')
        mobilePhone.setError('')
        birthDate.setError('')
        name.setValue('')
        jobTitle.setValue('')
        mobilePhone.setValue('+375')
        birthDate.setValue('')
        close()
    }

    const checkData = () => {
        const nameError = validateName(name.value)
        const jobTitleError = validateJobTitle(jobTitle.value)
        const mobilePhoneError = validatePhoneNumber(mobilePhone.value)
        const birthDateError = validateBirthDate(birthDate.value)

        name.setError(nameError)
        jobTitle.setError(jobTitleError)
        mobilePhone.setError(mobilePhoneError)
        birthDate.setError(birthDateError)

        if (!nameError && !jobTitleError && !mobilePhoneError && !birthDateError) {
            action({
                id: contact?.id || "0",
                name: name.value.trim().replace(/\s+/g, ' '),
                birthDate: birthDate.value,
                jobTitle: jobTitle.value.trim().replace(/\s+/g, ' '),
                mobilePhone: mobilePhone.value
            })
            closeModal()
        }
    }

    return (
        isVisible ?
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.title}>{title}</div>
                    <InputField placeholder="name" {...name} tooltip={'Enter your name (letters and spaces only)'}/>
                    <InputField placeholder="job title" {...jobTitle}
                                tooltip={'Specify your job title (letters, spaces, and hyphens allowed)'}/>
                    <InputField placeholder="mobile phone" {...mobilePhone}
                                tooltip={'Type your mobile number (format: +375XXXXXXXXX)'}/>
                    <InputField placeholder="birth date" {...birthDate}
                                tooltip={'Input your birth date (format: YYYY-MM-DD)'}/>
                    <div className={styles.buttons}>
                        <SecondaryButton text={"Cancel"} action={closeModal}/>
                        <div className={styles.betweenButtons}/>
                        <PrimaryButton text={title === "CREATING" ? "Create" : "Save changes"} action={checkData}/>
                    </div>
                </div>
            </div>
            : null
    )
}

export default ModalContact