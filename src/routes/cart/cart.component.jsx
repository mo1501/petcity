import React from "react";
import { ReactComponent as BackIcon } from '../../assets/images-svgs/arrow-left.svg';







import "./cart.styles.css";
import CartItem from "../../components/cart-item/cart-item.component";


const CartPage = () => {
    return (


        <>
            <div className="header-section">
                <BackIcon className='back-icon' />
                <p className="header-text">Continue Shopping</p>
            </div>
            <div className="cart-header">
                <p className="cart-title">CART</p>
                <p className="cart-subtitle">You have 4 items in your cart</p>
            </div>
            <div className="cartpage-content">
                <div className="cartitems-section">
                    <CartItem index={0} />
                    <CartItem index={1} />
                    <CartItem index={2} />
                    <CartItem index={3} />
                </div>
                <div className="checkout-section">
                    <p>Pay</p>
                </div>
            </div>


        </>



    );
};


export default CartPage;
