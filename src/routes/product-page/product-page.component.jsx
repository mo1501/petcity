import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CART_ERROR, addToCart, cartOperationEnd, cartOperationStart } from "../../state/actions/cartActions";

import Button from 'react-bootstrap/Button';
import "./product-page.styles.css";
import Footer from "../../components/footer/footer.component";

import StarRating from "../../components/star-rating/star-rating.component";
import { BeatLoader } from "react-spinners";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";




const ProductPage = () => {
    const location = useLocation();
    const product = location.state.product || 'No message passed';

    const dispatch = useDispatch();
    const currentUserId = useSelector(state => state.user.user && state.user.user.uid);
    const isCartLoading = useSelector(state => state.cart.isCartLoading);
    

    const handleAddToCartClick = async (product) => {
        try {
            dispatch(cartOperationStart());
            await dispatch(addToCart(product, currentUserId));
            dispatch(cartOperationEnd());
        } catch (error) {
            dispatch(CART_ERROR, error);
        }

    };





    return (
        <>

            <div className="product-page">

                <div className="product-image-container">
                    <img className="product-image" src={product.imageUrl} alt="product" />

                </div>
                <div className="product-content">
                    <div className="product-info">
                        <p className="product-page-name">{product.name}</p>
                        <p className="product-page-description">{product.longDescription}</p>
                        <div className="product-rating">
                            <StarRating rating={product.rating} />

                        </div>

                        <div className="checkout-container">
                            <div className="product-price-info">
                                <p>With your options:</p>
                                <p id="total-price">${product.price / 100}</p>
                            </div>
                            <div className="atc-button-container">
                                {isCartLoading ? <BeatLoader size={0.2} color={"#F38385"} /> :
                                    <Button className="product-page-atc-button" onClick={() => {
                                        handleAddToCartClick(product)
                                    }}>Add to cart</Button>}

                            </div>

                        </div>


                    </div>

                </div>



            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </>



    );
};


export default ProductPage;
