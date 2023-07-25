import ProductImage from '../../assets/images-svgs/ProductImage.png';
import MedsImage from '../../assets/images-svgs/meds.png';
import AccessoriesImage from '../../assets/images-svgs/accessories.png';
import ToyImage from '../../assets/images-svgs/toy.png';
import RatingsImage from '../../assets/images-svgs/star.svg';



const products = [
    {
        name: 'Chicken Treats',
        image: ProductImage,
        rating: RatingsImage,
        description: 'Give your precious cat the nourishment they deserve with our carefully crafted "Purrfectly Nourish" pet food.',
        price: 25.99,
    },
    {
        name: 'Playful Paws',
        image: ToyImage,
        rating: RatingsImage,
        description: 'Unleash the joy and excitement in your furry friend with our "Playful Paws" toy!.',
        price: 5.99,
    },
    {
        name: 'Cozy Retreat',
        image: AccessoriesImage,
        rating: RatingsImage,
        description: 'Give your beloved furry friend a private sanctuary with our "Cozy Retreat" pet tent.',
        price: 10.99,
    },
    {
        name: 'VitalPaws',
        image: MedsImage,
        rating: RatingsImage,
        description: '"VitalPaws" offers a comprehensive range of solutions to cater to your pet"s individual health needs.',
        price: 15.99,
    }


];

export default products;