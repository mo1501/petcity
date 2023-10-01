import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import "./productcard2.styles.css";






const ProductCard2 = ({ product }) => {
    const navigate = useNavigate();
    const handleProductClick = () => {
        navigate(`/home/categories/product/${product.id}`, {state: {product: product}});

    }



    return (

        <div className="product-card2" onClick={handleProductClick}>
            <Card border="dark" style={{ width: '18rem', height: '22rem' }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title className="product-title">{product.name}</Card.Title>
                    <Card.Text className="product-description">
                        {product.shortDescription}
                    </Card.Text>
                    <div className="product-price-container">
                        <Button className="atc-button">Add to cart</Button>
                        <Card.Text className="product-price">${product.price/100}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>




    );
};


export default ProductCard2;



