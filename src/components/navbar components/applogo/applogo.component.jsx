import React from "react";
import { ReactComponent as PetLogo } from '../../../assets/images-svgs/petcity-logo2.svg';
import "./applogo.styles.css";


const AppLogo = () => {
    return (
       
            <div className="petlogo-container">
            <PetLogo className='petcity-logo' />
            </div>

      
    );
};


export default AppLogo;
