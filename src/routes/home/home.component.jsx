import React from "react";

import CatImage from '../../assets/images-svgs/CatImage.png';
import DogImage from '../../assets/images-svgs/DogImage.png';
import BirdImage from '../../assets/images-svgs/Bird.png';
import ButterflyImage from '../../assets/images-svgs/butterfly.png';
import FarmImage from '../../assets/images-svgs/farm.png';
import FishImage from '../../assets/images-svgs/Fish.png';
import ReptileImage from '../../assets/images-svgs/ReptileImage.png';
import RodentImage from '../../assets/images-svgs/rodent.png';





import "./home.styles.css";
import Footer from "../../components/footer/footer.component";
import CarouselContainer from "../../components/carousel/carousel.component";
import ProductCard2 from "../../components/product-card2/productcard2.component";
import products from "../../assets/utilities/productdata.js";




const HomePage = () => {

    



    return (


        <div className="homepage">

            <div className="page-content">
                <div className="page-title">
                    <h5>Explore our products</h5>
                </div>
                <div className="carousel-container">
                    <CarouselContainer />
                </div>
                <div className="pet-categories-section">
                    <h5>Shop by Pet</h5>
                    <div className="categories-container1">
                        <div className="category-container">
                            <img src={CatImage} alt="Cat" />
                            <span>Cat</span>
                        </div>
                        <div className="category-container">
                            <img src={DogImage} alt="Dog" />
                            <span>Dog</span>
                        </div>
                        <div className="category-container">
                            <img src={FarmImage} alt="Farm" />
                            <span>Farm</span>
                        </div>
                        <div className="category-container">
                            <img src={BirdImage} alt="Bird" />
                            <span>Bird</span>
                        </div>
                    </div>
                    <div className="categories-container2">
                        <div className="category-container">
                            <img src={ButterflyImage} alt="Butterfly" />
                            <span>Insect</span>
                        </div>
                        <div className="category-container">
                            <img src={FishImage} alt="Fish" />
                            <span>Fish</span>
                        </div>
                        <div className="category-container">
                            <img src={ReptileImage} alt="Reptile" />
                            <span>Reptile</span>
                        </div>
                        <div className="category-container">
                            <img src={RodentImage} alt="Rodent" />
                            <span>Rodent</span>
                        </div>
                    </div>

                </div>
                <h5>Popular Products</h5>
                <div className="popular-product-section">

                    <ProductCard2 product={products} index={0} />
                    <ProductCard2 product={products} index={1} />
                    <ProductCard2 product={products} index={2} />
                    <ProductCard2 product={products} index={3} />
                    <ProductCard2 product={products} index={0} />
                    <ProductCard2 product={products} index={0} />
                    <ProductCard2 product={products} index={0} />
                </div>



            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </div>



    );
};


export default HomePage;
