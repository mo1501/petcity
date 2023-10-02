import React from "react";
import { useLocation } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';







import "./product-page.styles.css";
import Footer from "../../components/footer/footer.component";

//import ProductCard2 from "../../components/product-card2/productcard2.component";
//import products from "../../assets/utilities/productdata.js";
import QuantityPicker from "../../components/quantity-picker/quantity-picker.component";




const ProductPage = () => {
    const location = useLocation();
    const product = location.state.product || 'No message passed';
    // const index = location.state.index || 'No message passed';



    return (
        <>

            <div className="product-page">

                <div className="product-image-container">
                    <img className="product-image" src={product.imageUrl} alt="product-image" />

                </div>
                <div className="product-content">
                    <div className="product-info">
                        <h3>{product.name}</h3>
                        <p>{product.longDescription}</p>
                        <div className="product-rating">
                        <img src={product.rating} alt="" />
                        <img src={product.rating} alt="" />
                        <img src={product.rating} alt="" />
                        <img src={product.rating} alt="" />
                        <img src={product.rating} alt="" />
                        <p>(50)</p>
                        </div>
                        <QuantityPicker/>
                        <div className="checkout-container">
                            <div className="product-price-info">
                                <p>With your options:</p>
                                <p id="total-price">${product.price}</p>
                            </div>
                            <div className="atc-button-container">
                            <Button className="product-page-atc-button">Add to cart</Button>
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
