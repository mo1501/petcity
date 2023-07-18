import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/images-svgs/petcarouselimage2.jpeg';
import './carousel.styles.css'




const CarouselContainer = () => {
    return (
        <Carousel >
            <Carousel.Item className='carousel-item'>
                <div className="image-container">
                    <img className="carousel-image" src={Image1} alt="First slide" />
                </div>
                <Carousel.Caption>
                    <h3>Get What You Need</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item'>
                <div className="image-container" >
                    <img className="carousel-image" src={Image1} alt="Second slide" />
                </div>
                <Carousel.Caption>
                    <h3>At Affordable Prices</h3>

                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default CarouselContainer;