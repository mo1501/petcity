import React, { useState, useEffect } from "react";
import { Firestore, collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import ProductCard2 from "../../components/product-card2/productcard2.component";

import "./whatsnew.styles.css";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

const categories = ["toy", "food", "medicines", "accessories"];

const WhatsNewPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoadingProducts, setisLoadingProducts] = useState(null);

    useEffect(() => {
        setisLoadingProducts(true);
        const fetchProducts = async () => {
            let allProducts = [];

            for (let category of categories) {
                const productsCollection = collection(db, category); // Fetching products by category
                const productSnapshot = await getDocs(productsCollection);
                const productList = productSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                allProducts = allProducts.concat(productList);
            }

            setProducts(allProducts);
            setisLoadingProducts(false);
        };

        fetchProducts();
    }, []);
    return (
        

        <div className="products-container">
            {isLoadingProducts ? <LoadingSpinner loading={isLoadingProducts} /> : null}
            {products.map((product) => (
                <ProductCard2 key={product.id} product={product} />
            ))}
        </div>



    );
};


export default WhatsNewPage;
