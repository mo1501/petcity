import React, { useState } from "react";

import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import "./navbar.styles.css";


import AppLogo from "../../components/navbar components/applogo/applogo.component";
import NavLinks from "../../components/navbar components/nav-links/nav-links.component";
import SearchBar from "../../components/navbar components/search-bar/search-bar.component";
import Cart from "../../components/navbar components/cart/cart.component";
import AccountIcon from "../../components/navbar components/account/account.component";
import NavbarDrawer from "../../components/navbar components/navbar-drawer/navbar-drawer.component";
import { ReactComponent as MenuIcon } from '../../assets/images-svgs/bars-solid.svg';



const NavBar = () => {
    const products = useSelector(state => state.products.products);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    console.log(isDrawerOpen);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <div className="navbar">
                {isDrawerOpen && <NavbarDrawer isDrawerOpen={isDrawerOpen} />}
                <div className="applogo-container">
                    <AppLogo />
                </div>
                <div className="navlinks-container">
                    <NavLinks />
                </div>
                <div className="searchbar-container">
                    <SearchBar products={products} />
                </div>
                <div className="cart-container">
                    <Cart />
                </div>
                <div className="accounticon-container">
                    <AccountIcon />
                </div>





            </div>
            <MenuIcon className="drawer-toggle" onClick={toggleDrawer} />

            <div className="navbar-divider"></div>


            <Outlet />

        </>

    );
};
export default NavBar;