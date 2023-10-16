import React from "react";
import { ReactComponent as Minus } from '../../assets/images-svgs/minus.svg';
import { ReactComponent as Plus } from '../../assets/images-svgs/plus.svg';




import "./quantity-picker.styles.css";






const QuantityPicker = ({ quantity, setQuantity }) => {
    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    return (

        <div className="quantity-picker">

            <Minus className="minus-button" onClick={decrement} />
            <p className="quantity">{quantity}</p>
            <Plus className="plus-button" onClick={increment} />



        </div>




    );
};


export default QuantityPicker;



