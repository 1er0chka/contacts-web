import React, {FunctionComponent, useContext} from 'react'
import {Contact} from "../../../service/Types"
import styles from './TableRow.module.sass'
import {ContextMenuContext} from "../../../provider/ContextMenuContext"

interface ITableRowProps {
    content: Contact
}

const TableRow: FunctionComponent<ITableRowProps> = ({content}) => {
    const {setVisible, setPosition, setContact} = useContext(ContextMenuContext)
    const showContextMenu = (event: React.MouseEvent<HTMLTableCellElement>) => {
        setContact(content)
        setPosition({x: event.clientX, y: event.clientY})
        setVisible(true)
    }

    return (
        <tr className={styles.tableRow}>
            <td>{content.name}</td>
            <td>{content.jobTitle}</td>
            <td>{content.mobilePhone}</td>
            <td>{content.birthDate}</td>
            <td onClick={showContextMenu}>
                <div className={styles.imageOther}>
                    <img src={'/resources/images/other.png'} alt=". . ."/>
                </div>
            </td>
        </tr>
    )
}

export default TableRow