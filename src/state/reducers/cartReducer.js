const INITIAL_STATE = {
    cartItems: [],
    cartError: null,
    isCartLoading: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProductIndex = state.cartItems.findIndex(
                item => item.id === action.payload.id
            );

            if (existingProductIndex >= 0) {
                // If the product exists, update its quantity
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingProductIndex].quantity += action.payload.quantity;
                return {
                    ...state,
                    cartItems: updatedCartItems,

                };
            } else {
                // If product doesn't exist in cart, add it
                return {
                    ...state,

                    cartItems: [...state.cartItems, action.payload]
                };
            }


        case 'UPDATE_ITEM_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.itemId
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };
        case 'SET_CART':
            return {
                ...state,
                cartItems: action.payload
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };

        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
            };

        case 'CART_OPERATION_START':
            return {
                ...state,
                isCartLoading: true,
            };

        case 'CART_OPERATION_END':
            return {
                ...state,
                isCartLoading: false,
            };

        case 'CART_ERROR':
            return {
                ...state,
                cartError: action.payload,
            };

        default:
            return state;
    }
};
export default cartReducer;