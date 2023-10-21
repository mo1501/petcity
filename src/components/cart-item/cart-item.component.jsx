import React from "react";
import { useDispatch } from 'react-redux';
import { updateItemQuantityFirestore, removeItemFromCartFirestore } from "../../state/actions/cartActions";
import QuantityPicker from "../quantity-picker/quantity-picker.component";
import { ReactComponent as DeleteIcon } from '../../assets/images-svgs/trash-vector.svg';



import "./cart-item.styles.css";

const CartItem = ({ cartProduct, userId }) => {
    const dispatch = useDispatch();


    const handleIncrement = () => {
        const newQuantity = cartProduct.quantity + 1;
        dispatch(updateItemQuantityFirestore(userId, cartProduct.id, newQuantity));
    };

    const handleDecrement = () => {
        const newQuantity = cartProduct.quantity - 1;
        if (newQuantity === 0) {
            if (window.confirm(`Are you sure you want to remove ${cartProduct.name} from your cart?`)) {
                dispatch(removeItemFromCartFirestore(userId, cartProduct.id));
            }
        } else {
            dispatch(updateItemQuantityFirestore(userId, cartProduct.id, newQuantity));
        }
    };

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to remove ${cartProduct.name} from your cart?`)) {
            dispatch(removeItemFromCartFirestore(userId, cartProduct.id));
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
                    <p className="product-price">${cartProduct.price / 100 * cartProduct.quantity}</p>
                    <DeleteIcon onClick={handleDelete} />
                </div>

            </div>

        </div>




    );
};


export default CartItem;



