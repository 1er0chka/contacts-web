export function validateName(name: string): string {
    const trimmedName = name.trim().replace(/\s+/g, ' ')

    if (!trimmedName) return 'Name is required'

    if (!/^[A-Za-zА-Яа-яЁё\s]{2,50}$/i.test(trimmedName)) return 'Invalid name'

    return ''
}

export function validatePhoneNumber(phoneNumber: string): string {
    if (!phoneNumber) return 'Phone number is required'

    if (!/^\+375\d{9}$/.test(phoneNumber)) return 'Invalid phone number'

    return ''
}

export function validateBirthDate(birthDate: string): string {
    if (!birthDate) return 'Birth date is required'

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthDate)) return 'Invalid birth date format'

    const birthDateObj = new Date(birthDate)
    const today = new Date()

    if (birthDateObj.toString() === 'Invalid Date') {
        return 'Invalid birth date'
    }

    if (birthDateObj > today) return 'Birth date cannot be in the future'

    const hundredYearsAgo = new Date()
    hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100)
    if (birthDateObj < hundredYearsAgo) return 'Age cannot be more than 100 years'

    return ''
}

export function validateJobTitle(jobTitle: string): string {
    const trimmedJobTitle = jobTitle.trim().replace(/\s+/g, ' ')

    if (!trimmedJobTitle) return 'Job title is required'

    if (!/^[A-Za-zА-Яа-яЁё\s-]{2,50}$/i.test(trimmedJobTitle)) return 'Invalid job title'

    return ''
}
