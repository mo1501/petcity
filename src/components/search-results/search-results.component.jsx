import React from "react";
import ProductCard2 from "../product-card2/productcard2.component";

const SearchResults = ({ product}) => {
    return (
        <div className="search-results">

            <div key={product.id} className="search-result-item">
                <ProductCard2 product={product}  />
            </div>

        </div>
    );
};

export default SearchResults;
