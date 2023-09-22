import React from "react";
import { useState, useEffect } from 'react';

import Textfield from "../textfield/textfield.component.jsx";
import SocialsPanel from "../socials/socials.component.jsx";
import { useNavigate } from 'react-router-dom';
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
    registerWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { useAuthState } from "react-firebase-hooks/auth";

import "./auth-form.styles.css";

const defaultFormFields = {
    email: '',
    password: '',
    confirmPassword: '',

};


const AuthForm = ({ isRegistered }) => {

    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, confirmPassword } = formFields;
    console.log(formFields);
    const [user, loading, error ] = useAuthState(auth);
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/home");


    }, [user, loading]);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        await createUserDocumentFromAuth(user);
        navigate('/home');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });

    };

    const handleRegistrationSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        try {

            await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            console.log(email, auth);
            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleSignInSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(
                email,
                password
            );

            resetFormFields();
            // navigate('/home');
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    };




    return (

        <form className="auth-form" onSubmit={!isRegistered ? handleRegistrationSubmit : handleSignInSubmit}>
            <div className="auth-form-header">
                {isRegistered ? <h2 className="auth-form-header-title">Log In</h2> : <h2 className="auth-form-header">Register</h2>}
                <p className="auth-form-header-subtitle">Complete your details or continue using social media</p>
            </div>

            <div className="auth-form-textfield">
                <Textfield id='email-field' isAuthForm={true} type={'email'} label={'Email'} name='email' value={email} onChange={handleChange} />
                <Textfield id='password-field' isAuthForm={true} type={'password'} label={'Password'} name='password' value={password} onChange={handleChange} />
                {!isRegistered && <Textfield id='confirmPassword-field' isAuthForm={true} type={'password'} label='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={handleChange} />}
            </div>
            <button type="submit" className="auth-button" >
                {isRegistered ? <p className="auth-button-label">Log in</p> : <p className="auth-button-label" onClick={handleRegistrationSubmit}>Sign Up</p>}
            </button>

            {!isRegistered ? <span className="socials-divider">
                Sign up with social media
            </span> : <span className="socials-divider">
                Log in with social media
            </span>}

            <SocialsPanel />
            <p className="auth-form-header-subtitle">By continuing you are confirming that you agree with our Terms and Conditions</p>

        </form>








    );
};


export default AuthForm;



