import React from 'react';
import PrimaryButton from "../primary-button/PrimaryButton";
import styles from './Header.module.sass'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>Contact List</div>
            <PrimaryButton text={"ADD CONTACT"} action={console.log}/>
        </div>
    );
};

export default Header;