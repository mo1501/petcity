import React from "react";
import { useEffect } from "react";
import FishHero from '../../assets/images-svgs/fishhero.png';
import CatHero from '../../assets/images-svgs/cathero.png';






import "./authentication.styles.css";
import AuthForm from "../../components/auth-form/auth-form.component";



const AuthPage = () => {
    useEffect(() => {
        // Add the no-scroll class to the body when the component mounts
        document.body.classList.add('no-scroll');



        // Remove the no-scroll class when the component unmounts
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);
    return (
        <div className="authentication-page">
            <div className="hero-image-section">
                <img className="auth-hero-image" src={FishHero} alt="" />
            </div>
            <div className="auth-form-section">
                <AuthForm />
            </div>
        </div>
    );
};


export default AuthPage;
