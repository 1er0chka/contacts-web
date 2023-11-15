import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header";
import Table from "../../components/table/Table";
import Service from "../../service/Service";
import {Contact} from "../../service/Types";
import Loading from "../../components/loading/Loading";
import {ContextMenuProvider} from "../../provider/ContextMenuContext";

const ContactsPage = () => {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [isLoaded, setLoaded] = useState<boolean>(false)

    const getContacts = async () => {
        Service.getAllContacts().then((data) => {
            setContacts(data)
            setLoaded(true)
        })
    }

    useEffect(() => {
        getContacts()
    }, [])

    return (
        <ContextMenuProvider>
            <div>
                {
                    isLoaded ?
                        <div>
                            <Header/>
                            <Table data={contacts}/>
                        </div>
                        :
                        <Loading/>
                }
            </div>
        </ContextMenuProvider>
    );
};

export default ContactsPage;