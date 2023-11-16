import React, {useContext, useEffect, useState} from 'react'
import Header from "../../components/header/Header"
import Table from "../../components/table/Table"
import Service from "../../service/Service"
import {Contact} from "../../service/Types"
import Loading from "../../components/loading/Loading"
import {ContextMenuContext} from "../../provider/ContextMenuContext"
import ContextMenu from "../../components/context-menu/ContextMenu"
import ModalContact from "../../components/modal-create-contact/ModalContact"
import ModalMessage from "../../components/modal-message/ModalMessage"
import ModalChoice from "../../components/modal-choice/ModalChoice"

const ContactsPage = () => {
    const [contacts, setContacts] = useState<Contact[]>([])
    const {contact} = useContext(ContextMenuContext)
    const [isLoaded, setLoaded] = useState<boolean>(false)
    const [isModalCreateContactVisible, setModalCreateContactVisible] = useState<boolean>(false)
    const [isModalEditContactVisible, setModalEditContactVisible] = useState<boolean>(false)
    const [isModalMessageVisible, setModalMessageVisible] = useState<boolean>(false)
    const [isModalDeleteVisible, setModalDeleteVisible] = useState<boolean>(false)
    const [modalMessageText, setModalMessageText] = useState<string>('')


    const getContacts = async () => {
        Service.getAllContacts().then((data) => {
            setContacts(data)
            setLoaded(true)
        })
    }

    const createContact = async (contact: Contact) => {
        Service.createContact(contact).then((message) => {
            getContacts()
            if (message) {
                setModalMessageText(message)
                setModalMessageVisible(true)
            }
        })
    }

    const editContact = async (contact: Contact) => {
        Service.editContact(contact).then((message) => {
            getContacts()
            if (message) {
                setModalMessageText(message)
                setModalMessageVisible(true)
            }
        })
    }

    const deleteContact = async () => {
        Service.deleteContact(contact).then((message) => {
            getContacts()
        })
    }

    useEffect(() => {
        getContacts()
    }, [])

    return (
        <div>
            {
                isLoaded ?
                    <div>
                        <Header buttonAction={() => setModalCreateContactVisible(true)}/>
                        <Table data={contacts}/>
                    </div>
                    :
                    <Loading/>
            }
            <ModalContact isVisible={isModalCreateContactVisible} title={"CREATING"} button={"Create"}
                          close={() => setModalCreateContactVisible(false)}
                          action={createContact}/>
            <ModalContact isVisible={isModalEditContactVisible} title={"EDITING"} button={"Edit"}
                          close={() => setModalEditContactVisible(false)}
                          action={editContact} contact={contact}/>
            <ModalMessage isVisible={isModalMessageVisible} close={() => setModalMessageVisible(false)}
                          message={modalMessageText}/>
            <ModalChoice isVisible={isModalDeleteVisible} close={() => setModalDeleteVisible(false)}
                         action={deleteContact}
                         message={'Are you sure you want to delete contact "' + contact.name + '"?'} button={'Delete'}/>
            <ContextMenu onEdit={() => setModalEditContactVisible(true)}
                         onDelete={() => setModalDeleteVisible(true)}/>
        </div>
    )
}

export default ContactsPage