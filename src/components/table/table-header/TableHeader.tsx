import React from 'react'
import styles from './TableHeader.module.sass'

const TableHeader = () => {
    // TODO sort

    return (
        <thead className={styles.tableHeader}>
        <tr>
            <th>NAME</th>
            <th>JOB TITLE</th>
            <th>MOBILE PHONE</th>
            <th>BIRTH DATE</th>
            <th></th>
        </tr>
        </thead>
    );
};

export default TableHeader;