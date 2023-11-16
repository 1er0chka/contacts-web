import React, {FunctionComponent} from 'react'
import styles from './InputField.module.sass'

interface IInputFieldProps {
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error: string
    tooltip: string
}

const InputField: FunctionComponent<IInputFieldProps> = ({placeholder, value, onChange, error, tooltip}) => {
    return (
        <div className={error ? styles.error : styles.input}>
            <input placeholder={placeholder} value={value} onChange={onChange} title={tooltip}/>
            <div>{error}</div>
        </div>
    )
}

export default InputField
