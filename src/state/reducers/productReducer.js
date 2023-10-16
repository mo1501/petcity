const INITIAL_STATE = {
    products: [],
    isProductsLoading: false,
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'START_FETCHING_PRODUCTS':
            return {
                ...state,
                isProductsLoading: true,
            };
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        case 'FINISHED_FETCHING_PRODUCTS':
            return {
                ...state,
                isProductsLoading: false,
            };
        default:
            return state;
    }
};

export default productReducer;
