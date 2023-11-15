import React, {useContext} from 'react';
import styles from './ContextMenu.module.sass'
import {ContextMenuContext} from "../../provider/ContextMenuContext";

const ContextMenu = () => {
    const {isVisible, setVisible, position} = useContext(ContextMenuContext)

    return (
        isVisible ?
            <div onMouseLeave={() => setVisible(false)} className={styles.menu}
                 style={{top: position.y - 10, left: position.x - 10, position: "absolute"}}>
                <div>Edit</div>
                <div>Delete</div>
            </div>
            : null
    );
};

export default ContextMenu;