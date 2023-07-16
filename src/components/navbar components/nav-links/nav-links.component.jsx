import React from "react";
import {  Link } from "react-router-dom";
import "./nav-links.styles.css";


const NavLinks = () => {
    return (

        <div className="nav-links-container">
            <Link to='/categories'>
            <span className="categories-span">Categories</span>
            </Link>
            <Link to='/deals'>
            <span className="deals-span">Deals</span>
            </Link>
            <Link to='/whatsnew'>
            <span className="whatsnew-span">What&apos;s new</span>
            </Link>
            <Link to='/delivery'>
            <span className="delivery-span">Delivery</span>
            </Link>
        </div>




    );
};


export default NavLinks;
