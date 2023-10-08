import React from "react";
import { useState, useEffect } from 'react';

import Textfield from "../textfield/textfield.component.jsx";
import SocialsPanel from "../socials/socials.component.jsx";
import LoadingSpinner from "../loading-spinner/loading-spinner.component.jsx";
import { useNavigate } from 'react-router-dom';
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR
} from '../../actions/userActions.js';
import { useAuthState } from "react-firebase-hooks/auth";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./auth-form.styles.css";
import ErrorDisplay from "../error-display/error-display.component.jsx";

const defaultFormFields = {
    email: '',
    password: '',
    confirmPassword: '',

};


const AuthForm = ({ isRegistered }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, confirmPassword } = formFields;
    const currentUser = useSelector(state => state.user.user);
    const authError = useSelector(state => state.user.authError);
    const isLoading = useSelector(state => state.user.isLoading);
    //const [error, setError] = useState(null);
    //const [isLoading, setisLoading] = useState(null);
    console.log(formFields);
    console.log(currentUser);
    console.log(authError);
    console.log(isLoading);
    //const [user] = useAuthState(auth);
    useEffect(() => {

        if (currentUser) navigate("/home");
    }, [currentUser]);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        dispatch({ type: LOGIN_START });
        try {

            const { userCred } = await signInWithGooglePopup();
            await createUserDocumentFromAuth(userCred);
            navigate('/home');
            dispatch({ type: LOGIN_SUCCESS, payload: userCred });
        } catch (error) {
            dispatch({ type: LOGIN_ERROR, payload: error });
        }


    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });

    };

    const handleRegistrationSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            //setError('Passwords do not match');
            dispatch({ type: SIGNUP_ERROR, payload: 'Passwords do not match' });
            return;
        }
        if (email && password && confirmPassword === '') {
            //setError('Input field are empty');
            dispatch({ type: SIGNUP_ERROR, payload: 'Input field are empty' });
            return;
        }
        dispatch({ type: SIGNUP_START });
        try {

            //setisLoading(true);
            //console.log(isLoading);
            const { userCred } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            // setError(null);
            // resetFormFields();
            // setisLoading(false);
            // console.log(isLoading);
            dispatch({ type: SIGNUP_SUCCESS, payload: userCred });
        } catch (err) {

            // setisLoading(false);
            // resetFormFields();
            if (err.code === 'auth/email-already-in-use') {
                //setError('Email already exists');
                dispatch({ type: SIGNUP_ERROR, payload: 'Email already exists' });
                // alert('Cannot create user, email already in use');
            } else {
                dispatch({ type: SIGNUP_ERROR, payload: 'user creation encountered an error' });
                //setError('user creation encountered an error');
            }
        }
    };

    const handleSignInSubmit = async (event) => {
        event.preventDefault();
        if (email === "" && password === "") {
            //setError('Input fields are empty');
            return;
        }
        dispatch({ type: LOGIN_START });
        try {

            //setisLoading(true);
            const { userCred } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            dispatch({ type: LOGIN_SUCCESS, payload: userCred });
            //console.log(isLoading);

            resetFormFields();
            //setError(null);
            //setisLoading(false);
            //console.log(isLoading);



        } catch (err) {
            dispatch({ type: LOGIN_ERROR, payload: err });
            //setisLoading(false);

            switch (err.code) {
                case 'auth/wrong-password':
                    dispatch({ type: SIGNUP_ERROR, payload: 'Wrong Email or Password' });
                    //setError('Wrong Email or Password');
                    break;
                case 'auth/user-not-found':
                    dispatch({ type: SIGNUP_ERROR, payload: 'Invalid Credentials' });
                    //setError('Invalid Credentials');
                    break;
                default:
                    //setError('Invalid Credentials');
                    dispatch({ type: SIGNUP_ERROR, payload: 'Invalid Credentials' });


            }
        }
    };

    const clearError = () => {
        dispatch({ type: LOGIN_ERROR, payload: null });
    };


    return (

        <form className="auth-form" onSubmit={!isRegistered ? handleRegistrationSubmit : handleSignInSubmit}>
            {isLoading ? <LoadingSpinner isLoading={isLoading} /> : null}
            {authError ?
                <ErrorDisplay errorMessage={authError} clearError={clearError} />
                : null}
            {console.log(isLoading)}
            <div className="auth-form-header">
                {isRegistered ? <h2 className="auth-form-header-title">Log In</h2> : <h2 className="auth-form-header">Register</h2>}
                <p className="auth-form-header-subtitle">Complete your details or continue using social media</p>
            </div>

            <div className="auth-form-textfield">
                <Textfield id='email-field' isAuthForm={true} type={'email'} label={'Email'} name='email' value={email} onChange={handleChange} />
                <Textfield id='password-field' isAuthForm={true} type={'password'} label={'Password'} name='password' value={password} onChange={handleChange} />
                {!isRegistered && <Textfield id='confirmPassword-field' isAuthForm={true} type={'password'} label='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={handleChange} />}
            </div>
            {isRegistered && <span className="forgot-password-link" onClick={() => { navigate('/forgot-password') }}>Forgot Password? </span>}
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



