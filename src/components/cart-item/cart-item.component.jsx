import React from "react";
import { useDispatch } from 'react-redux';

import QuantityPicker from "../quantity-picker/quantity-picker.component";
import { ReactComponent as DeleteIcon } from '../../assets/images-svgs/trash-vector.svg';

import "./cart-item.styles.css";

const CartItem = ({ cartProduct }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({
            type: 'UPDATE_ITEM_QUANTITY',
            payload: {
                itemId: cartProduct.id,
                quantity: cartProduct.quantity + 1
            }
        });
    };

    const handleDecrement = () => {
        if (cartProduct.quantity > 0) {
            dispatch({
                type: 'UPDATE_ITEM_QUANTITY',
                payload: {
                    itemId: cartProduct.id,
                    quantity: cartProduct.quantity - 1
                }
            });
        }
    };

    return (

        <div className="cart-item">
            <div className="cart-image-section">
                <img className='cart-image' src={cartProduct.imageUrl} alt="" />
            </div>
            <div className="cart-description-section">
                <div className="cart-description">
                    <p className="product-name">{cartProduct.name}</p>
                    <p className="product-desription">{cartProduct.shortDescription}</p>
                    <QuantityPicker
                        quantity={cartProduct.quantity}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                    />
                </div>
                <div className="cart-end">
                    <p className="product-price">${cartProduct.price/100}</p>
                    <DeleteIcon />
                </div>

            </div>

        </div>




    );
};


export default CartItem;



