import React from "react";

import products from "../../assets/utilities/productdata.js";

import "./auth-form.styles.css";

import TextfieldComponent from "../textfield/textfield.component.jsx";
import SocialsPanel from "../socials/socials.component.jsx";


const AuthForm = () => {
    const isRegistered = false;
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
            <div className="auth-button">
                {isRegistered ? <p className="auth-button-label">Sign Up</p> : <p className="auth-button-label">Log In</p>}
            </div>
            <div className="socials-divider">
                <label>Sign up using social media</label>
            </div>
            <SocialsPanel />
            <p className="auth-form-header-subtitle">By continuing you are confirming that you agree with our Terms and Conditions</p>
        </div>








    );
};


export default AuthForm;



