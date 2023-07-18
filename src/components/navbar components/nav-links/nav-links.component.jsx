import React from "react";
import {  Link } from "react-router-dom";
import "./nav-links.styles.css";


const NavLinks = () => {
    return (

        <div className="nav-links-container">
            <Link className="link" to='/categories'>
            <span className="categories-span">Categories</span>
            </Link>
            <Link className="link" to='/deals'>
            <span className="deals-span">Deals</span>
            </Link>
            <Link className="link" to='/whatsnew'>
            <span className="whatsnew-span">What&apos;s new</span>
            </Link>
            <Link className="link" to='/delivery'>
            <span className="delivery-span">Delivery</span>
            </Link>
        </div>




    );
};


export default NavLinks;
