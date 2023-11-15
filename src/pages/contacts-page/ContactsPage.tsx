import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header";
import Table from "../../components/table/Table";
import Service from "../../service/Service";
import {Contact} from "../../service/Types";
import Loading from "../../components/loading/Loading";

const ContactsPage = () => {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [isLoaded, setLoaded] = useState<boolean>(false)

    const getContacts = async () => {
        Service.getAllContacts().then((data) => setContacts(data))
    }

    useEffect(() => {
        setLoaded(false)
        getContacts()
    }, [])

    useEffect(() => {
        setLoaded(true)
    }, [contacts])

    return (
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
    );
};

export default ContactsPage;