import React from "react";



import "./categories.styles.css";
import products from "../../assets/utilities/productdata.js"
import ProductCard2 from "../../components/product-card2/productcard2.component";
import Footer from "../../components/footer/footer.component";




const CategoriesPage = () => {
    return (


        <div>
            <div className="food-category-container">
                <h2>Food</h2>
                <div className="food-section">

                    <ProductCard2 product={products} index={0} />
                    <ProductCard2 product={products} index={0} />
                    <ProductCard2 product={products} index={0} />
                    <ProductCard2 product={products} index={0} />
                    <ProductCard2 product={products} index={0} />

                </div>
            </div>

            <div className="food-category-container">
                <h2>Toys</h2>
                <div className="food-section">

                    <ProductCard2 product={products} index={1} />
                    <ProductCard2 product={products} index={1} />
                    <ProductCard2 product={products} index={1} />
                    <ProductCard2 product={products} index={1} />
                    <ProductCard2 product={products} index={1} />

                </div>
            </div>


            <div className="food-category-container">
                <h2>Accessories</h2>
                <div className="food-section">

                    <ProductCard2 product={products} index={2} />
                    <ProductCard2 product={products} index={2} />
                    <ProductCard2 product={products} index={2} />
                    <ProductCard2 product={products} index={2} />
                    <ProductCard2 product={products} index={2} />

                </div>
            </div>

            <div className="food-category-container">
                <h2>Medicines</h2>
                <div className="food-section">

                    <ProductCard2 product={products} index={3} />
                    <ProductCard2 product={products} index={3} />
                    <ProductCard2 product={products} index={3} />
                    <ProductCard2 product={products} index={3} />
                    <ProductCard2 product={products} index={3} />

                </div>
            </div>

            <footer className="footer">
                <Footer />
            </footer>

        </div>



    );
};


export default CategoriesPage;
