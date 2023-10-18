const INITIAL_STATE = {
    cartItems: [],
    cartTotal: 0,
    cartItemCount: 0,
    cartError: null,
    isCartLoading: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    let newState;
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProductIndex = state.cartItems.findIndex(
                item => item.id === action.payload.id
            );

            let updatedCartItems;

            if (existingProductIndex >= 0) {
                // If the product exists, update its quantity
                updatedCartItems = [...state.cartItems];
                updatedCartItems[existingProductIndex].quantity += action.payload.quantity;
            } else {
                // If product doesn't exist in cart, add it
                updatedCartItems = [...state.cartItems, action.payload];
            }

            newState = {
                ...state,
                cartItems: updatedCartItems,
            };
            break;

        case 'UPDATE_ITEM_QUANTITY':
            updatedCartItems = state.cartItems.map(item =>
                item.id === action.payload.itemId
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );

            newState = {
                ...state,
                cartItems: updatedCartItems,
            };
            break;

        case 'SET_CART':
            newState = {
                ...state,
                cartItems: action.payload,
            };
            break;

        case 'REMOVE_FROM_CART':
            updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);

            newState = {
                ...state,
                cartItems: updatedCartItems,
            };
            break;

        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
                cartTotal: 0,
                cartItemCount: 0,
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
    if (newState) {
        newState.cartTotal = newState.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        newState.cartItemCount = newState.cartItems.reduce((acc, item) => acc + item.quantity, 0);
        return newState;
    }

    return state;
};

export default cartReducer;