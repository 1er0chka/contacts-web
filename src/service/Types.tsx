export type Contact = {
    id: string
    name: string
    mobilePhone: string
    jobTitle: string
    birthDate: string
}

export const defaultContact: Contact = {
    birthDate: "BirthDate", id: "", jobTitle: "JobTitle", mobilePhone: "MobilePhone", name: "Name"
}

export interface IContactsResponse {
    data: Contact[]
}

export interface IResponse {
    message: string
}