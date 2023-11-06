import React from "react";
import { useNavigate } from 'react-router-dom';
import CatImage from '../../assets/images-svgs/CatImage.png';
import DogImage from '../../assets/images-svgs/DogImage.png';
import BirdImage from '../../assets/images-svgs/Bird.png';
import ButterflyImage from '../../assets/images-svgs/butterfly.png';
import FarmImage from '../../assets/images-svgs/farm.png';
import FishImage from '../../assets/images-svgs/Fish.png';
import ReptileImage from '../../assets/images-svgs/ReptileImage.png';
import RodentImage from '../../assets/images-svgs/rodent.png';
import Footer from "../../components/footer/footer.component";
import CarouselContainer from "../../components/carousel/carousel.component";

import "./home.styles.css";

const HomePage = () => {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate(`/home/categories`);
    }
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
                    <div className="pet-categories-container" onClick={handleclick}>
                        <div className="category-icon">
                            <img src={CatImage} alt="Cat" />
                            <span>Cat</span>
                        </div>
                        <div className="category-icon">
                            <img src={DogImage} alt="Dog" />
                            <span>Dog</span>
                        </div>
                        <div className="category-icon">
                            <img src={FarmImage} alt="Farm" />
                            <span>Farm</span>
                        </div>
                        <div className="category-icon">
                            <img src={BirdImage} alt="Bird" />
                            <span>Bird</span>
                        </div>

                        <div className="category-icon">
                            <img src={ButterflyImage} alt="Butterfly" />
                            <span>Insect</span>
                        </div>
                        <div className="category-icon">
                            <img src={FishImage} alt="Fish" />
                            <span>Fish</span>
                        </div>
                        <div className="category-icon">
                            <img src={ReptileImage} alt="Reptile" />
                            <span>Reptile</span>
                        </div>
                        <div className="category-icon">
                            <img src={RodentImage} alt="Rodent" />
                            <span>Rodent</span>
                        </div>
                    </div>

                </div>
            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </div>



    );
};


export default HomePage;
