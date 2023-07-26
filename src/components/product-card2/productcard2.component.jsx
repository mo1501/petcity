import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import "./productcard2.styles.css";






const ProductCard2 = ({ product, index }) => {
    const navigate = useNavigate();
    const handleProductClick = () => {
        navigate(`/product/${product[index]}`, {state: {product: product[index]}});

    }



    return (

        <div className="product-card2" onClick={handleProductClick}>
            <Card border="dark" style={{ width: '18rem', height: '22rem' }}>
                <Card.Img variant="top" src={product[index].image} />
                <Card.Body>
                    <Card.Title className="product-title">{product[index].name}</Card.Title>
                    <Card.Text className="product-description">
                        {product[index].description}
                    </Card.Text>
                    <div className="product-price-container">
                        <Button className="atc-button">Add to cart</Button>
                        <Card.Text className="product-price">${product[index].price}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>




    );
};


export default ProductCard2;



