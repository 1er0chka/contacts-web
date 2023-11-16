import {useState, ChangeEvent} from 'react'

const useFormField = (initialValue: string, validateFunction: (value: string) => string) => {
    const [value, setValue] = useState<string>(initialValue)
    const [error, setError] = useState<string>('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        setError(validateFunction(event.target.value))
    }

    return {value, onChange, error, setError, isValid: error === '', setValue}
}

export default useFormField
