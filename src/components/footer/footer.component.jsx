import React from "react";
import { ReactComponent as MailIcon } from '../../assets/images-svgs/mail.svg';
import { ReactComponent as HomeIcon } from '../../assets/images-svgs/home.svg';
import { ReactComponent as PhoneIcon } from '../../assets/images-svgs/phone.svg';
import { ReactComponent as PawIcon } from '../../assets/images-svgs/ph_paw-print-thin.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images-svgs/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images-svgs/facebook.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images-svgs/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images-svgs/instagram.svg';












import "./footer.styles.css";


const Footer = () => {
    return (

        <>
        <div className="footer-divider"></div>
        <div className="footer-container">
            

            <div className="need-help-section">
                <h3>Contact</h3>
                <div className="location-container">
                    <HomeIcon />
                    <span>25th Avenue Lancaster</span>
                </div>
                <div className="mail-container">
                    <MailIcon />
                    <span>petcity@gmail.com</span>
                </div>
                <div className="phone-container">
                    <PhoneIcon />
                    <span>123456789</span>
                </div>

            </div>

            <div className="information-section">
                <h3>Information</h3>
                <div className="about-us-container">
                    <PawIcon />
                    <span>About Us</span>
                </div>
                <div className="tcs-container">
                    <PawIcon />
                    <span>Terms and conditions</span>
                </div>
                <div className="privacy-policy-container">
                    <PawIcon />
                    <span>Privacy Policy</span>
                </div>

            </div>

            <div className="socials-section">
                <h3>Social Links</h3>
                <div className="socials-container">
                    <p>We are available on all social channels. Follow us for latest updates and notifications !!</p>
                    <div className="socialicons-container">
                        <TwitterIcon className='twitter-icon'/>
                        <FacebookIcon className='facebook-icon'/>
                        <LinkedInIcon className='linkedin-icon'/>
                        <InstagramIcon className='instagram-icon'/>
                    </div>
                </div>
                

            </div>
            

        </div>

        </>

    );
};


export default Footer;
