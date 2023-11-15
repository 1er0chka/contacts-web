import React, {FunctionComponent} from 'react';
import {Contact} from "../../../service/Types";
import TableRowButton from "./table-row-button/TableRowButton";

interface ITableRowProps {
    content: Contact
}

const TableRow:FunctionComponent<ITableRowProps> = ({content}) => {
    return (
        <tr>
            <td>{content.name}</td>
            <td>{content.jobTitle}</td>
            <td>{content.mobilePhone}</td>
            <td>{content.birthDate}</td>
            <td><TableRowButton/></td>
        </tr>
    );
};

export default TableRow;