import React from "react";

import TextfieldComponent from "../textfield/textfield.component.jsx";
import SocialsPanel from "../socials/socials.component.jsx";
import { useNavigate } from 'react-router-dom';

import "./auth-form.styles.css";




const AuthForm = ({ isRegistered }) => {
    const navigate = useNavigate();

    const handleAuthPageButtonClick = () => {
        navigate('/');  // Navigate to About page
    };
    return (

        <div className="auth-form">
            <div className="auth-form-header">
                {isRegistered ? <h2 className="auth-form-header-title">Log In</h2> : <h2 className="auth-form-header">Register</h2>}
                <p className="auth-form-header-subtitle">Complete your details or continue using social media</p>
            </div>
            <div className="auth-form-textfield">
                <TextfieldComponent isAuthForm={true} type={'email'} label={'Email'} />
                <TextfieldComponent isAuthForm={true} type={'password'} label={'Password'} />
                {!isRegistered && <TextfieldComponent isAuthForm={true} type={'password'} label={'Confirm Password'} />}
            </div>
            <div className="auth-button" onClick={handleAuthPageButtonClick}>
                {isRegistered ? <p className="auth-button-label">Log in</p> : <p className="auth-button-label">Sign Up</p>}
            </div>

            {!isRegistered ? <span className="socials-divider">
                Sign up with social media
            </span> : <span className="socials-divider">
                Log in with social media
            </span>}

            <SocialsPanel />
            <p className="auth-form-header-subtitle">By continuing you are confirming that you agree with our Terms and Conditions</p>
        </div>








    );
};


export default AuthForm;



