import React from "react";
import {  Link } from "react-router-dom";
import { ReactComponent as PetLogo } from '../../../assets/images-svgs/petcity-logo2.svg';
import "./applogo.styles.css";


const AppLogo = () => {
    return (

        <div className="petlogo-container">
            <Link to='/'>
                <PetLogo className='petcity-logo' />
            </Link>
        </div>


    );
};


export default AppLogo;
