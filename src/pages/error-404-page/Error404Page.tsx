import React from 'react'
import styles from './Error404Page.module.sass'
import {Link} from "react-router-dom"

const Error404Page = () => {
    return (
        <div>
            <div className={styles.title}>PAGE NOT FOUND</div>
            <Link className={styles.link} to={"/"}>← Back to table</Link>
        </div>
    )
}

export default Error404Page