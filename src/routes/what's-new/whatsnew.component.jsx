import React, { useState, useEffect } from "react";
import { Firestore, collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import ProductCard2 from "../../components/product-card2/productcard2.component";





import "./whatsnew.styles.css";

const categories = ["toy", "food", "medicines", "accessories"];

const WhatsNewPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            let allProducts = [];

            for (let category of categories) {
                const productsCollection = collection(db, category); // Fetching products by category
                const productSnapshot = await getDocs(productsCollection);
                const productList = productSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                allProducts = allProducts.concat(productList);
            }

            setProducts(allProducts);
        };

        fetchProducts();
    }, []);
    return (


        <div className="products-container">
            {products.map((product) => (
                <ProductCard2 key={product.id} product={product} />
            ))}
        </div>



    );
};


export default WhatsNewPage;
