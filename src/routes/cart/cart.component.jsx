import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, checkout, removeFromCart } from '../../state/actions/cartActions';
import CartItem from "../../components/cart-item/cart-item.component";
import CheckoutPane from "../../components/checkout-pane/checkout-pane.component";

import "./cart.styles.css";

const CartPage = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const userId = useSelector(state => state.user.user);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleCheckout = () => {
        dispatch(checkout(userId, cartItems));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

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
                <p className="cart-subtitle">You have 4 items in your cart</p>
            </div>
            <div className="cartpage-content">
                <div className="cartitems-section">
                    {
                        cartItems.map(cartProduct => (
                            <CartItem key={cartProduct.id} cartProduct={cartProduct} />
                        ))
                    }
                </div>
                <div className="checkout-section">
                    <CheckoutPane />
                </div>
            </div>


        </>



    );
};


export default CartPage;
