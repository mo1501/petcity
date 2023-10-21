import { db } from '../../utils/firebase/firebase.utils.js';
import { addDoc, collection, Timestamp } from "firebase/firestore";
import {  doc, getDoc, updateDoc } from "firebase/firestore";

// Action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';
export const SET_CART = 'SET_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const CART_ERROR = 'CART_ERROR';
export const CART_OPERATION_START = 'CART_OPERATION_START';
export const CART_OPERATION_END = 'CART_OPERATION_END';


// Action creators
export const addToCart = (product, userId, quantity = 1) => {
    return async dispatch => {
        try {
            // Reference to the user document
            const userDocRef = doc(db, "users", userId);

            // Get the current user document
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
                // Extract current cart from user's data
                const currentCart = userDocSnapshot.data().cart || [];

                // Check if product already exists in cart
                const existingProductIndex = currentCart.findIndex(
                    item => item.id === product.id
                );

                if (existingProductIndex >= 0) {
                    // Update the product's quantity if it exists in the cart
                    currentCart[existingProductIndex].quantity += quantity;
                } else {
                    // If the product doesn't exist in the cart, add it
                    const cartItem = {
                        ...product,
                        quantity: quantity,
                    };
                    currentCart.push(cartItem);
                }

                // Update cart in Firestore
                await updateDoc(userDocRef, { cart: currentCart });

                // Dispatch an action to update cart in Redux state
                dispatch({
                    type: ADD_TO_CART,
                    payload: currentCart,
                });
            } else {
                // Handle case where user does not exist (this shouldn't occur in most cases)
                console.error("User does not exist!");
            }
        } catch (error) {
            console.error("Error updating cart in Firestore:", error);
        }
    }
};


export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId
});

export const updateItemQuantity = (itemId, quantity) => ({
    type: UPDATE_ITEM_QUANTITY,
    payload: { itemId, quantity }
});

export const updateItemQuantityFirestore = (userId, itemId, newQuantity) => {
    return async dispatch => {
        dispatch({ type: CART_OPERATION_START });
        try {
            // Reference to the user document
            const userDocRef = doc(db, 'users', userId);

            // Get the current user document
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
                const currentCart = userDocSnapshot.data().cart || [];

                const itemIndex = currentCart.findIndex(item => item.id === itemId);

                if (itemIndex >= 0) {
                    currentCart[itemIndex].quantity = newQuantity;

                    if (currentCart[itemIndex].quantity <= 0) {
                        // If quantity drops to 0 or less, remove the item from the cart
                        currentCart.splice(itemIndex, 1);
                    }

                    // Update cart in Firestore
                    await updateDoc(userDocRef, { cart: currentCart });

                    // Dispatch updated cart to Redux store
                    dispatch({
                        type: SET_CART,
                        payload: currentCart,
                    });
                } else {
                    console.error("Item not found in cart!");
                }
            } else {
                console.error("User does not exist!");
            }
            dispatch({ type: CART_OPERATION_END });
        } catch (error) {
            console.error("Error updating item quantity in Firestore:", error);
            dispatch({ type: CART_ERROR, payload: error });
        }
    }
};

export const removeItemFromCartFirestore = (userId, itemId) => {
    return async dispatch => {
        dispatch({ type: CART_OPERATION_START });
        try {
            // Reference to the user document
            const userDocRef = doc(db, 'users', userId);

            // Get the current user document
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
                const currentCart = userDocSnapshot.data().cart || [];

                const updatedCart = currentCart.filter(item => item.id !== itemId);

                // Update cart in Firestore
                await updateDoc(userDocRef, { cart: updatedCart });

                // Dispatch updated cart to Redux store
                dispatch({
                    type: SET_CART,
                    payload: updatedCart,
                });
            } else {
                console.error("User does not exist!");
            }
            dispatch({ type: CART_OPERATION_END });
        } catch (error) {
            console.error("Error removing item from cart in Firestore:", error);
            dispatch({ type: CART_ERROR, payload: error });
        }
    }
};


export const cartOperationStart = () => ({
    type: CART_OPERATION_START,
});
export const cartError = () => ({
    type: CART_ERROR,
});
export const cartOperationEnd = () => ({
    type: CART_OPERATION_END,
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

export const loadUserCart = (userId) => {
    return async dispatch => {
        try {
            // Reference to the user document
            const userDocRef = doc(db, 'users', userId);

            // Get the current user document
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
                const currentCart = userDocSnapshot.data().cart || [];

                // Dispatch an action to set this cart in Redux state
                dispatch({
                    type: SET_CART,
                    payload: currentCart,
                });
            } else {
                console.error("User does not exist!");
            }
        } catch (error) {
            console.error("Error fetching user cart from Firestore:", error);
        }
    }
};

