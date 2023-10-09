import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../../utils/firebase/firebase.utils.js';



import "./categories.styles.css";
import ProductCard2 from "../../components/product-card2/productcard2.component";
import Footer from "../../components/footer/footer.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";






const CategoriesPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const isProductsLoading = useSelector(state => state.products.isProductsLoading);
    const categories = ["toy", "food", "medicines", "accessories"];

    useEffect(() => {

        dispatch(fetchProductsAsync()); // dispatch the async action here

    }, [dispatch]);

    const renderProductsForCategory = (categoryName) => {
        const filteredProducts = products.filter(product => product.category === categoryName);
        return filteredProducts.map((product, index) => (
            <ProductCard2 key={product.id} product={product} index={index} />
        ));
    };
    return (
        <div>
            {isProductsLoading ? <LoadingSpinner loading={isProductsLoading} /> : null}
            {
                categories.map(category => (
                    <div className="category-container" key={category}>
                        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                        <div className="products-section">
                            {renderProductsForCategory(category)}
                        </div>
                    </div>
                ))
            }
            <footer className="footer">
                <Footer />
            </footer>
        </div>




    );
};


export default CategoriesPage;
