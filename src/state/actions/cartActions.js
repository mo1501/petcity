import { db } from '../../utils/firebase/firebase.utils.js';
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getFirestore, doc, setDoc,getDoc,updateDoc } from "firebase/firestore";

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
export const addToCart = (product,userId, quantity = 1) => {
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

