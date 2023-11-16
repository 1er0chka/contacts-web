import React, {FunctionComponent} from 'react'
import styles from './SecondaryButton.module.sass'

interface ISecondaryButtonProps {
    text: string
    action: () => void
}

const SecondaryButton: FunctionComponent<ISecondaryButtonProps> = ({text, action}) => {
    return (
        <div className={styles.button} onClick={action}>
            {text}
        </div>
    )
}

export default SecondaryButton