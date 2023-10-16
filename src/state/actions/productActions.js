export const SET_PRODUCTS = 'SET_PRODUCTS';
export const START_FETCHING_PRODUCTS = 'START_FETCHING_PRODUCTS';
export const FINISHED_FETCHING_PRODUCTS = 'FINISHED_FETCHING_PRODUCTS';

export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products,
});
export const startFetchingProducts = () => ({
    type: START_FETCHING_PRODUCTS
});
export const finishedFetchingProducts = () => ({
    type: FINISHED_FETCHING_PRODUCTS,
});
