import React from "react";
import { useState, useEffect } from 'react';

import Textfield from "../textfield/textfield.component.jsx";
import SocialsPanel from "../socials/socials.component.jsx";
import LoadingSpinner from "../loading-spinner.component.jsx/loading-spinner.component.jsx";
import { useNavigate } from 'react-router-dom';
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { useAuthState } from "react-firebase-hooks/auth";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./auth-form.styles.css";
import ErrorDisplay from "../error-display/error-display.component.jsx";

const defaultFormFields = {
    email: '',
    password: '',
    confirmPassword: '',

};


const AuthForm = ({ isRegistered }) => {

    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, confirmPassword } = formFields;
    const [error, setError] = useState(null);
    const [isLoading, setisLoading] = useState(null);
    console.log(formFields);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) navigate("/home");
    }, [user]);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        setisLoading(true);
        await createUserDocumentFromAuth(user);
        setisLoading(false);
        toast.success('Successfully logged in !', {
            position: toast.POSITION.TOP_RIGHT
        });
        navigate('/home');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });

    };

    const handleRegistrationSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (email && password && confirmPassword === '') {
            setError('Input field are empty');
            return;
        }
        try {
            setisLoading(true);
            console.log(isLoading);
            await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            setError(null);
            resetFormFields();
            setisLoading(false);
            console.log(isLoading);

        } catch (err) {
            resetFormFields();
            if (err.code === 'auth/email-already-in-use') {
                setError('Email already exists');
                alert('Cannot create user, email already in use');
            } else {
                setError('user creation encountered an error');
            }
        }
    };

    const handleSignInSubmit = async (event) => {
        event.preventDefault();
        if (email && password === '') {
            setError('Input fields are empty');
            return;
        }
        try {
            setisLoading(true);
            await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            console.log(isLoading);
            toast.success('Login Successful !', {
                position: toast.POSITION.TOP_RIGHT
            });
            resetFormFields();
            setError(null);
            setisLoading(false);
            console.log(isLoading);



        } catch (err) {
            resetFormFields();
            switch (err.code) {
                case 'auth/wrong-password':
                    setError('Wrong Email or Password');
                    break;
                case 'auth/user-not-found':
                    setError('Invalid Credentials');
                    break;
                default:
                    setError('Invalid Credentials');

            }
        }
    };

    const clearError = () => {
        setError(null);
    };


    return (

        <form className="auth-form" onSubmit={!isRegistered ? handleRegistrationSubmit : handleSignInSubmit}>
            {isLoading ? <LoadingSpinner loading={isLoading} /> : null}
            {error ?
                <ErrorDisplay errorMessage={error} clearError={clearError} />
                : null}

            <div className="auth-form-header">
                {isRegistered ? <h2 className="auth-form-header-title">Log In</h2> : <h2 className="auth-form-header">Register</h2>}
                <p className="auth-form-header-subtitle">Complete your details or continue using social media</p>
            </div>

            <div className="auth-form-textfield">
                <Textfield id='email-field' isAuthForm={true} type={'email'} label={'Email'} name='email' value={email} onChange={handleChange} />
                <Textfield id='password-field' isAuthForm={true} type={'password'} label={'Password'} name='password' value={password} onChange={handleChange} />
                {!isRegistered && <Textfield id='confirmPassword-field' isAuthForm={true} type={'password'} label='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={handleChange} />}
            </div>
            {isRegistered && <span className="forgot-password-link" onClick={()=> {navigate('/forgot-password')}}>Forgot Password? </span>}
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



