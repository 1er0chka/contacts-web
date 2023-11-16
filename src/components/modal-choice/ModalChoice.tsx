import React, {FunctionComponent} from 'react'
import styles from './ModalChoice.module.sass'
import PrimaryButton from "../primary-button/PrimaryButton"
import SecondaryButton from "../secondary-button/SecondaryButton"

interface IModalChoiceProps {
    isVisible: boolean
    close: () => void
    action: () => void
    message: string
    button: string
}

const ModalChoice: FunctionComponent<IModalChoiceProps> = ({isVisible, close, message, action, button}) => {
    const onClick = () => {
        action()
        close()
    }

    return (
        isVisible ?
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.title}>Message</div>
                    <div className={styles.text}>{message}</div>
                    <div className={styles.buttons}>
                        <SecondaryButton text={"Cancel"} action={close}/>
                        <div className={styles.betweenButtons}/>
                        <PrimaryButton text={button} action={onClick}/>
                    </div>
                </div>
            </div>
            : null
    )
}


export default ModalChoice