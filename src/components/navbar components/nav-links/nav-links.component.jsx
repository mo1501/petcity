import React from "react";
import { Link } from "react-router-dom";
import "./nav-links.styles.css";


const NavLinks = () => {
    return (

        <div className="nav-links-container">
            <Link className="link" to='/home/categories'>
                <span className="categories-span">Categories</span>
            </Link>
            <Link className="link" to='/home/deals'>
                <span className="deals-span">Deals</span>
            </Link>
            <Link className="link" to='/home/whatsnew'>
                <span className="whatsnew-span">What&apos;s new</span>
            </Link>
            <Link className="link" to='/home/delivery'>
                <span className="delivery-span">Delivery</span>
            </Link>
        </div>




    );
};


export default NavLinks;
