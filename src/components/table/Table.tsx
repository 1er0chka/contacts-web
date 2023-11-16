import React, {FunctionComponent} from 'react'
import TableHeader from "./table-header/TableHeader"
import {Contact} from "../../service/Types"
import TableRow from "./table-row/TableRow"
import styles from './Table.module.sass'

interface ITableProps {
    data: Contact[]
}

const Table: FunctionComponent<ITableProps> = ({data}) => {
    return (
        <table className={styles.table}>
            <TableHeader/>
            <tbody>
            {
                data.map((object: Contact) => <TableRow content={object} key={object.id}/>)
            }
            </tbody>
        </table>
    )
}

export default Table