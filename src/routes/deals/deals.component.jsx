import React, { useEffect } from "react";
import ProductCard2 from "../../components/product-card2/productcard2.component";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../../utils/firebase/firebase.utils.js';
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

import "./deals.styles.css";


const DealsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const isProductsLoading = useSelector(state => state.products.isProductsLoading);


    useEffect(() => {
        dispatch(fetchProductsAsync()); // dispatch the async action here
    }, [dispatch]);

    return (

        <>
        <p className="deals-page-title">Deals</p>
        <div className="products-container-grid">
            {isProductsLoading ? <LoadingSpinner loading={isProductsLoading} /> : null}
            {products.map((product) => (
                <ProductCard2 key={product.id} product={product} />
            ))}
        </div>
        </>



    );
};


export default DealsPage;
