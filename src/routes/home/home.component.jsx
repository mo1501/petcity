import React from "react";



import "./home.styles.css";
import Footer from "../../components/footer/footer.component";
import CarouselContainer from "../../components/carousel/carousel.component";




const HomePage = () => {
    return (


        <div className="homepage">
            <div className="page-title">
                <h2>Explore our products</h2>
            </div>
            <div className="page-content">
                <div className="carousel-container">
                    <CarouselContainer />

                </div>


            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </div>



    );
};


export default HomePage;
