import React from "react";



import "./checkout-pane.styles.css";
import PaymentMethodContainer from "../payment-method/payment-method.component.jsx";
import TextfieldComponent from "../textfield/textfield.component.jsx";


const CheckoutPane = ({cartTotal}) => {

    return (

        <div className="checkoutpane-section">
            <p className="payment-title">Payment Details</p>
            <p className="payment-subtitle">Choose your payment method</p>
            <PaymentMethodContainer />
            <TextfieldComponent label={'Name on card ....'} />
            <TextfieldComponent label={'Card Number ....'} />
            <div className="payment-expcvc-section">
                <TextfieldComponent className='expiry-date-field' label={'Expiry Date'} />
                <TextfieldComponent className='cvc-field' label={'CVC'} />
            </div>
            <div className="checkout-price-button-section">
                <div className="price-container">
                    <p className="total">Total:</p>
                    <p className="price">${cartTotal/100}</p>
                </div>
                <div className="checkout-button">
                    <p className="checkout-label">Checkout</p>
                </div>

            </div>



        </div>




    );
};


export default CheckoutPane;



