import React, {FunctionComponent} from 'react'
import PrimaryButton from "../primary-button/PrimaryButton"
import styles from './Header.module.sass'

interface IHeaderProps {
    buttonAction: () => void
}

const Header: FunctionComponent<IHeaderProps> = ({buttonAction}) => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>Contact List</div>
            <PrimaryButton text={"ADD CONTACT"} action={buttonAction}/>
        </div>
    )
}

export default Header