import React from "react";
import "./socials.styles.css";
import { ReactComponent as GoogleVector } from '../../assets/images-svgs/google-vector.svg';
import { ReactComponent as InstagramVector } from '../../assets/images-svgs/instagram-vector.svg';
import { ReactComponent as TwitterVector } from '../../assets/images-svgs/twitter-vector.svg';




const SocialsPanel = () => {


    return (
        <div className="socials-container">
            <GoogleVector className='socials-icon' />
            <InstagramVector className='socials-icon' />
            <TwitterVector className='socials-icon' />


        </div>
    );
};

export default SocialsPanel;
