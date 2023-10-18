import React from "react";
import { ReactComponent as Minus } from '../../assets/images-svgs/minus.svg';
import { ReactComponent as Plus } from '../../assets/images-svgs/plus.svg';




import "./quantity-picker.styles.css";






const QuantityPicker = ({ quantity, onIncrement, onDecrement }) => {
    
    return (

        <div className="quantity-picker">

            <Minus className="minus-button" onClick={onDecrement} />
            <p className="quantity">{quantity}</p>
            <Plus className="plus-button" onClick={onIncrement} />



        </div>




    );
};


export default QuantityPicker;



