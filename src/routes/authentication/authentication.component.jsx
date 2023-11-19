import React from "react";
import { useEffect } from "react";
import FishHero from '../../assets/images-svgs/fishhero.png';
import CatHero from '../../assets/images-svgs/cathero.png';
import { useState } from 'react';







import "./authentication.styles.css";
import AuthForm from "../../components/auth-form/auth-form.component";



const AuthPage = () => {
    const [isRegistered, setisRegistered] = useState(false);
    const changeIsRegistered = () => {
        setisRegistered(prevState => !prevState);
    };
   
    return (
        <div className="authentication-page">
            <div className="hero-image-section">
                <img className="auth-hero-image" src={isRegistered ? FishHero : CatHero} alt="" />
            </div>
            <div className="auth-form-section">
                <AuthForm isRegistered={isRegistered} />
                {!isRegistered ?
                    <div className="login-confirmation" >
                        <p className="login-confirmation-text">Already have an account? <span onClick={changeIsRegistered} className="sign-in-link">Sign In</span></p>
                    </div>
                    : <div className="register-toggle-container" >
                        <p className="register-toggle-text">Already have an account? <span onClick={changeIsRegistered} className="sign-up-link">Sign Up</span></p>
                    </div>
                }
            </div>

        </div>
    );
};


export default AuthPage;
