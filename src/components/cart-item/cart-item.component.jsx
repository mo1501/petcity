import React from "react";


import products from "../../assets/utilities/productdata.js";
import QuantityPicker from "../quantity-picker/quantity-picker.component";
import { ReactComponent as DeleteIcon } from '../../assets/images-svgs/trash-vector.svg';






import "./cart-item.styles.css";






const CartItem = ({index}) => {

    return (

        <div className="cart-item">
            <div className="cart-image-section">
                <img className='cart-image' src={products[index].image} alt="" />
            </div>
            <div className="cart-description-section">
                <div className="cart-description">
                    <p className="product-name">{products[index].name}</p>
                    <p className="product-desription">{products[index].description}</p>
                    <QuantityPicker />
                </div>
                <div className="cart-end">
                    <p className="product-price">${products[index].price}</p>
                    <DeleteIcon />
                </div>

            </div>

        </div>




    );
};


export default CartItem;



