import React from "react";
import {  Link } from "react-router-dom";
import { ReactComponent as CartIcon } from '../../../assets/images-svgs/shopping-cart.svg';

import "./cart.styles.css";


const Cart = () => {
    return (

        <Link to='/cart'>
        <CartIcon className='cart-icon' />
        </Link>



    );
};


export default Cart;
