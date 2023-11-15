import {Contact} from "./Types";

const Service = {
    async getAllContacts(): Promise<Contact[]> {
        try {
            const response: Response = await fetch("http://localhost:5093/contacts");
            return await response.json()
        } catch (e) {
            console.error('Failed To Load Data From The Server.')
            return []
        }
    }
}

export default Service