import React, { useState } from "react";
import { CardElement, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux';
import { BeatLoader } from "react-spinners";


import "./checkout-pane.styles.css";
import PaymentMethodContainer from "../payment-method/payment-method.component.jsx";
import TextfieldComponent from "../textfield/textfield.component.jsx";


const CheckoutPane = ({ cartTotal }) => {
    const stripe = useStripe();
    const elements = useElements();
    //const amount = useSelector(cartTotal);
    const currentUser = useSelector(state => state.user.user);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: cartTotal * 100 }),
        }).then((res) => {
            return res.json();
        });

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.email : 'guest',
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful!');
            }
        }
    };


    return (

        <form className="checkoutpane-section" onSubmit={paymentHandler}>
            <p className="payment-title">Payment Details</p>
            <p className="payment-subtitle">Enter your payment details</p>
            <input className="card-name-textfield" placeholder={'Name on card ....'} />
            <input className="card-name-textfield" placeholder={'Country ....'} />
            <input className="card-name-textfield" placeholder={'State/Province....'} />
            <input className="card-name-textfield" placeholder={'Address line 1 ....'} />
            <CardElement className="payment-details-container" />


            {/* <CardNumberElement />
            <div className="payment-expcvc-section">
                <CardExpiryElement className='expiry-date-field' />
                <CardCvcElement className='cvc-field' />
            </div> */}
            <div className="checkout-price-button-section">
                <div className="price-container">
                    <p className="total">Total:</p>
                    <p className="price">${cartTotal / 100}</p>
                </div>

                <div >
                    {isProcessingPayment ? <BeatLoader size={0.2} color={"#F38385"} /> :
                        <button type='submit' className="checkout-button"><p className="checkout-label">Checkout</p></button>
                    }

                </div>

            </div>



        </form>




    );
};


export default CheckoutPane;



