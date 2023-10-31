import React, { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from 'react-redux';
import { BeatLoader } from "react-spinners";
import { checkout, addUserAddress } from "../../state/actions/cartActions";


import "./checkout-pane.styles.css";


const CheckoutPane = ({ cartTotal, onCheckoutSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.user);
    const cartItems = useSelector(state => state.cart.cartItems);

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const [country, setCountry] = useState("");
    const [stateOrProvince, setStateOrProvince] = useState("");
    const [addressLine1, setAddressLine1] = useState("");


    const saveAddressToFirestore = async () => {
        const address = {

            country,
            stateOrProvince,
            addressLine1,
        }
        // Use the action to save the address to Firestore
        dispatch(addUserAddress(currentUser.uid, address));
    };
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
            body: JSON.stringify({ amount: cartTotal }),
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
        saveAddressToFirestore();
        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                dispatch(checkout(currentUser.uid, cartItems, cartTotal));
                if (onCheckoutSuccess) onCheckoutSuccess();
                alert('Payment Successful!');

            }
        }
    };



    return (

        <form className="checkoutpane-section" onSubmit={paymentHandler}>
            <p className="payment-title">Payment Details</p>
            <p className="payment-subtitle">Enter your payment details</p>
            <input className="card-name-textfield"
                placeholder={'Country ....'}
                value={country}
                onChange={e => setCountry(e.target.value)} />
            <input className="card-name-textfield"
                placeholder={'State/Province....'}
                value={stateOrProvince}
                onChange={e => setStateOrProvince(e.target.value)} />
            <input className="card-name-textfield"
                placeholder={'Address line 1 ....'}
                value={addressLine1}
                onChange={e => setAddressLine1(e.target.value)} />
            <CardElement className="payment-details-container" />

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



