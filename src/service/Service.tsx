import {Contact, IResponse} from "./Types"

const Service = {
    async getAllContacts(): Promise<Contact[]> {
        try {
            const response: Response = await fetch("http://localhost:5093/contacts")
            const contacts: Contact[] = await response.json()
            contacts.sort((a, b) => a.name.localeCompare(b.name))
            return contacts
        } catch (e) {
            console.error('Failed To Load Data From The Server.')
            return []
        }
    },

    async createContact(contact: Contact): Promise<string> {
        try {
            const response: Response = await fetch("http://localhost:5093/contacts", {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            })
            if (response.status === 409) {
                const data: IResponse = await response.json()
                console.error(data.message)
                return data.message
            }
        } catch (e) {
            console.error('Failed To Create User.')
        }
        return ''
    },

    async editContact(contact: Contact): Promise<string> {
        try {
            const response: Response = await fetch("http://localhost:5093/contacts", {
                method: 'PUT',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            })
            if (response.status === 409) {
                const data: IResponse = await response.json()
                console.error(data.message)
                return data.message
            }
        } catch (e) {
            console.error('Failed To Update User')
        }
        return ''
    },

    async deleteContact(contact: Contact) {
        console.log(contact.id)
        try {
            await fetch(`http://localhost:5093/contacts/${contact.id}`, {
                method: 'DELETE',
                mode: "cors"
            })
        } catch (e) {
            console.error('Failed To Delete User')
        }
    }
}

export default Service