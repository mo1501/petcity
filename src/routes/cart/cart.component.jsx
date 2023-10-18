import React from "react";
import { useEffect } from "react";
import { useSelector } from 'react-redux';

import CartItem from "../../components/cart-item/cart-item.component";
import CheckoutPane from "../../components/checkout-pane/checkout-pane.component";
import { BeatLoader } from "react-spinners";

import "./cart.styles.css";

const CartPage = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const isCartLoading = useSelector(state => state.cart.isCartLoading);
    const cartItemCount = useSelector(state => state.cart.cartItemCount);
    const cartTotal = useSelector(state => state.cart.cartTotal);
    const userId = useSelector(state => state.user.user);

    useEffect(() => {
        // Add the no-scroll class to the body when the component mounts
        document.body.classList.add('no-scroll');
        // Remove the no-scroll class when the component unmounts
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (


        <>

            <div className="cart-header">
                <p className="cart-title">CART</p>
                <p className="cart-subtitle">You have {cartItemCount} items in your cart</p>
            </div>
            <div className="cart-page-loading-spinner">{isCartLoading ? <BeatLoader size={0.2} color={"#F38385"} /> : null}</div>
            <div className="cartpage-content">
                
                <div className="cartitems-section">
                    {
                        cartItems.map(cartProduct => (
                            <CartItem key={cartProduct.id} cartProduct={cartProduct} userId={userId.uid} />
                        ))
                    }
                </div>
                <div className="checkout-section">
                    <CheckoutPane cartTotal={cartTotal}/>
                </div>
            </div>


        </>



    );
};


export default CartPage;
