import React from "react";
import { ReactComponent as Minus } from '../../assets/images-svgs/minus.svg';
import { ReactComponent as Plus } from '../../assets/images-svgs/plus.svg';




import "./quantity-picker.styles.css";






const QuantityPicker = () => {

    return (

        <div className="quantity-picker">

            <Minus className="minus-button" />
            <p className="quantity">0</p>
            <Plus className="plus-button" />



        </div>




    );
};


export default QuantityPicker;



