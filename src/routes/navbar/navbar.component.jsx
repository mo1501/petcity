import React from "react";

import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import "./navbar.styles.css";


import AppLogo from "../../components/navbar components/applogo/applogo.component";
import NavLinks from "../../components/navbar components/nav-links/nav-links.component";
import SearchBar from "../../components/navbar components/search-bar/search-bar.component";
import Cart from "../../components/navbar components/cart/cart.component";
import AccountIcon from "../../components/navbar components/account/account.component";



const NavBar = () => {
    const products = useSelector(state => state.products.products);

    return (
        <>
            <div className="navbar">
                <div className="applogo-container">

                    <AppLogo />
                </div>
                <div className="navlinks-container">
                    <NavLinks />
                </div>
                <div className="searchbar-container">
                    <SearchBar products={products}/>
                </div>
                <div className="cart-container">
                    <Cart />
                </div>
                <div className="accounticon-container">
                    <AccountIcon />
                </div>




            </div>
            <div className="navbar-divider"></div>

            <Outlet />

        </>

    );
};
export default NavBar;