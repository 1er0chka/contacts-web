import React from 'react';
import PrimaryButton from "../primary-button/PrimaryButton";

const Header = () => {
    return (
        <div>
            <div>Contact List</div>
            <PrimaryButton text={"Add Contact"} action={console.log}/>
        </div>
    );
};

export default Header;

/*
*
* created project
- added Service
- added Router
- added pages (404, contacts)
- edited configuration
*
* */