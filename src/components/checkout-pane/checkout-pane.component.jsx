import React from "react";

import products from "../../assets/utilities/productdata.js";

import "./checkout-pane.styles.css";
import PaymentMethodContainer from "../payment-method/payment-method.component.jsx";
import TextfieldComponent from "../textfield/textfield.component.jsx";
import Button from "react-bootstrap/esm/Button.js";

const CheckoutPane = () => {

    return (

        <div className="checkoutpane-section">
            <p className="payment-title">Payment Details</p>
            <p className="payment-subtitle">Choose your payment method</p>
            <PaymentMethodContainer />
            <TextfieldComponent label={'Name on card ....'} />
            <TextfieldComponent label={'Card Number ....'} />
            <div className="payment-expcvc-section">
                <TextfieldComponent label={'Expiry Date'} />
                <TextfieldComponent label={'CVC'} />
            </div>
            <div className="checkout-price-button-section">
                <div className="price-container">
                    <p className="total">Total:</p>
                    <p className="price">$79.99</p>
                </div>
                <div className="checkout-button">
                    <p className="checkout-label">Checkout</p>
                </div>

            </div>



        </div>




    );
};


export default CheckoutPane;



