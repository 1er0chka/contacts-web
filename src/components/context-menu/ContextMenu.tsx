import React, {FunctionComponent, useContext} from 'react'
import styles from './ContextMenu.module.sass'
import {ContextMenuContext} from "../../provider/ContextMenuContext"
import {Contact} from "../../service/Types"

interface IContextMenuProps {
    onEdit: (contact: Contact) => void
    onDelete: (contact: Contact) => void
}

const ContextMenu: FunctionComponent<IContextMenuProps> = ({onEdit, onDelete}) => {
    const {isVisible, setVisible, position, contact} = useContext(ContextMenuContext)

    return (
        isVisible ?
            <div onMouseLeave={() => setVisible(false)} className={styles.menu}
                 style={{top: position.y - 10, left: position.x - 10, position: "absolute"}}>
                <div onClick={() => onEdit(contact)}>Edit</div>
                <div onClick={() => onDelete(contact)}>Delete</div>
            </div>
            : null
    )
}

export default ContextMenu