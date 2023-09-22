import React from "react";



import "./account.styles.css";
import { signOut } from "firebase/auth";
import { signOutUser } from "../../utils/firebase/firebase.utils";


const AccountPage = () => {

    
    return (

        
        <div>
            <h1>Account Page</h1>
            <button onClick={signOutUser}>Sign Out</button>
        </div>



    );
};


export default AccountPage;
