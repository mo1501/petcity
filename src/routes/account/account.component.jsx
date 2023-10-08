import React from "react";



import "./account.styles.css";

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';



import { signOutUser } from "../../utils/firebase/firebase.utils";
import { SIGNOUT } from "../../actions/userActions";


const AccountPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignOut = async () => {
        try {
            await signOutUser();
            dispatch({ type: SIGNOUT });
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
