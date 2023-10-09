import React, { useEffect } from "react";
import ProductCard2 from "../../components/product-card2/productcard2.component";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../../utils/firebase/firebase.utils.js';

import "./whatsnew.styles.css";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";


const WhatsNewPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const isProductsLoading = useSelector(state => state.products.isProductsLoading);
    console.log(isProductsLoading);

    useEffect(() => {
        dispatch(fetchProductsAsync()); // dispatch the async action here
    }, [dispatch]);

    return (


        <div className="products-container">
            {isProductsLoading ? <LoadingSpinner loading={isProductsLoading} /> : null}
            {products.map((product) => (
                <ProductCard2 key={product.id} product={product} />
            ))}
        </div>



    );
};


export default WhatsNewPage;
