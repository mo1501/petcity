import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from '../../../assets/images-svgs/user.svg';
import "../../../assets/images-svgs/user.svg"

import "./account.styles.css";



const AccountIcon = () => {
    return (

        <Link className="link-account" to='/home/account'>
            <UserIcon className='user-icon' />
        </Link>



    );
};


export default AccountIcon;
