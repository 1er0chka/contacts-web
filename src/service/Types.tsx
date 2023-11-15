export type Contact = {
    Id: string
    Name: string
    MobilePhone: string
    JobTitle: string
    BirthDate: string
}

export const defaultContact: Contact = {
    BirthDate: "BirthDate", Id: "", JobTitle: "JobTitle", MobilePhone: "MobilePhone", Name: "Name"
}