import React from "react";


import "./product-card.styles.css";





const ProductCard = ({ product,index }) => {
    return (


        <div className="product-card-container">
            <div className="product-image-container">
                <img className='product-image' src={product[index].image} alt="product-image" />
            </div>
            <div className="product-content">
                <span className="product-name">{product[index].name}</span>
                <p className="product-description">{product[index].description}</p>
                <div className="ratings-container">
                    <img src={product[index].rating} alt="" />
                    <img src={product[index].rating} alt="" />
                    <img src={product[index].rating} alt="" />
                    <img src={product[index].rating} alt="" />
                    <img src={product[index].rating} alt="" />
                </div>
                <div className="product-price">
                    <button className="product-button"><span className="product-button-label">Add to cart</span></button>
                    <span className="price-label">${product[index].price}</span>
                </div>

            </div>
        </div>



    );
};


export default ProductCard;
