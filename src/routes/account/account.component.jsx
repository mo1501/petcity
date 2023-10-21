import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { SIGNOUT } from "../../state/actions/userActions";


import "./account.styles.css";

const AccountPage = () => {
    const user = useSelector(state => state.user.user);
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


        <div className="account-page">
            <h3 className="account-page-title">Welcome {user && user.email}</h3>
            <div className="address-button">
                <p>Edit Address</p>
            </div>
            <div className="orders-button">
                <p>My Orders</p>
            </div>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>



    );
};


export default AccountPage;
