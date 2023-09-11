import React from "react";
import { useEffect } from "react";
//import { ReactComponent as BackIcon } from '../../assets/images-svgs/arrow-left.svg';
//import { useNavigate } from 'react-router-dom';






import "./cart.styles.css";
import CartItem from "../../components/cart-item/cart-item.component";
import PaymentMethodContainer from "../../components/payment-method/payment-method.component";
import CheckoutPane from "../../components/checkout-pane/checkout-pane.component";


const CartPage = () => {

    // const navigate = useNavigate();
    // const goBack = () => {
    //     navigate(-1); // This navigates back to the previous page
    // };
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
            {/* <div className="header-section">
                <BackIcon className='back-icon' onClick={goBack} />
                <p className="header-text">Continue Shopping</p>
            </div> */}
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
                    <CheckoutPane/>
                </div>
            </div>


        </>



    );
};


export default CartPage;
