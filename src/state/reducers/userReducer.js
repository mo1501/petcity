const INITIAL_STATE = {
    user: null,
    isloading: false,
    authError: null,
};


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                user: null,
                authError: null,
                isloading: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                authError: null,
                isloading: false,
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                user: null,
                authError: action.payload,
                isloading: false,
            };
        case 'SIGN_OUT':
            return {
                ...state,
                user: null,
                isloading: false,
            };
        case 'SIGNUP_START':
            return {
                ...state,
                user: null,
                authError: null,
                isloading: true,
            };
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                user: action.payload,
                authError: null,
                isLoading: false,
            };
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.payload,
                isloading: false,
            };
        default:
            return state;
    }
};

export default userReducer;
