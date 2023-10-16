import { db } from '../../utils/firebase/firebase.utils.js';
import { addDoc, collection, Timestamp } from "firebase/firestore";

// Action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const CART_ERROR = 'CART_ERROR';

// Action creators
export const addToCart = (item, quantity = 1) => ({
    type: ADD_TO_CART,
    payload:{
        item,
        quantity
    } 
});

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId
});

export const updateItemQuantity = (itemId, quantity) => ({
    type: UPDATE_ITEM_QUANTITY,
    payload: { itemId, quantity }
});

export const clearCart = () => ({
    type: CLEAR_CART
});

// Thunk action for checkout
export const checkout = (userId, cartItems) => {
    return async dispatch => {
        const ordersRef = collection(db, "orders");

        const newOrder = {
            userId: userId,
            items: cartItems,
            timestamp: Timestamp.now()
        };

        try {
            await addDoc(ordersRef, newOrder);
            dispatch(clearCart());
        } catch (error) {
            console.error("Error saving order: ", error);
        }
    }
};
