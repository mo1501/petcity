import React from "react";


import { ReactComponent as VisaIcon } from '../../assets/images-svgs/visa-logo.svg';
import { ReactComponent as PaypalIcon } from '../../assets/images-svgs/paypal-vector.svg';
import { ReactComponent as MasterCardIcon } from '../../assets/images-svgs/mastercard-logo.svg';
import { ReactComponent as AmericanExpressIcon } from '../../assets/images-svgs/american-express.svg';




import "./payment-method.styles.css";

const PaymentMethodContainer = () => {

    return (

        <div className="payment-method-section">
            <div className="payment-icon-container">
                <MasterCardIcon className='payment-method-icon' />
                <input type="radio" value="" />
            </div>

            <div className="payment-icon-container">
                <VisaIcon className='payment-method-icon' />
                <input type="radio" value="" />
            </div>

            <div className="payment-icon-container">
                <AmericanExpressIcon className='payment-method-icon' />
                <input type="radio" value="" />
            </div>
            
            <div className="payment-icon-container">
                <PaypalIcon className='payment-method-icon' />
                <input type="radio" value="" />
            </div>





        </div>




    );
};


export default PaymentMethodContainer;



