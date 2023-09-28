import React from "react";



import "./account.styles.css";

import { useNavigate } from 'react-router-dom';

import { signOutUser } from "../../utils/firebase/firebase.utils";


const AccountPage = () => {
    const navigate = useNavigate();
    const handleSignOut = async () => {
        try {
            await signOutUser();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };


    return (


        <div>
            <h1>Account Page</h1>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>



    );
};


export default AccountPage;
