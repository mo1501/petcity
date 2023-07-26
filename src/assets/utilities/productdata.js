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
        longDescription: 'Provide your furry friend with a meal they will love that is equally nutritious with PetBounty Complete Nutrition Dry Dog Food. This high-quality pet food offers a perfectly balanced diet for dogs of all breeds and life stages, from energetic puppies to senior dogs enjoying their golden years.PetBounty dog food is packed with real chicken as the number one ingredient, ensuring your pet receives a premium source of lean protein that supports strong muscles. The recipe also contains a variety of fruits and vegetables to provide essential vitamins and minerals, promoting overall health and vitality.Our unique blend includes Omega-3 and Omega-6 fatty acids for a shiny coat and healthy skin, while natural fiber from whole grains supports healthy digestion. Also, we"ve fortified our food with essential nutrients like calcium for strong bones and teeth, antioxidants for a healthy immune system, and DHA to support brain and eye development in puppies.',
        price: 25.99,
    },
    {
        name: 'Playful Paws',
        image: ToyImage,
        rating: RatingsImage,
        description: 'Unleash the joy and excitement in your furry friend with our "Playful Paws" toy!.',
        longDescription: "Unleash a world of fun and exercise for your furry friend with our PetPlay Rainbow Ropes! This vibrant, multi-colored rope toy is designed to engage your pet's natural instincts and provide hours of enjoyment.The Rainbow Ropes toy is ideal for playing fetch, tug-of-war, and other interactive games. It's made from durable, pet-safe cotton and designed to withstand enthusiastic play. Plus, the twisted rope design promotes healthy teeth and gums by acting like dental floss as your pet chews and tugs, improving oral health and keeping bad breath at bay.Rainbow Ropes isn't just a toy - it's an interactive fitness tool. Regular play helps reduce anxiety, curb destructive behaviors, and promote mental and physical well-being, keeping your pet happy and healthy.",
        price: 5.99,
    },
    {
        name: 'Cozy Retreat',
        image: AccessoriesImage,
        rating: RatingsImage,
        description: 'Give your beloved furry friend a private sanctuary with our "Cozy Retreat" pet tent.',
        longDescription: "Ensure the well-being of your beloved pet with PetVital Advanced Health Supplement, the comprehensive solution for maintaining optimal health. This high-quality supplement is designed to support and enhance your pet's overall wellness, from a shiny coat to robust immunity.PetVital Advanced Health Supplement is crafted with an expert blend of essential vitamins, minerals, and antioxidants. These elements are crucial for your pet's body to function correctly, helping to support everything from heart health to digestion. Our formulation also includes Omega-3 fatty acids, recognized for their role in promoting healthy skin and a shiny coat, and Glucosamine for joint health support.These chewable tablets are flavored with natural chicken and beef, making medicine time stress-free and tasty. The easy-to-administer form means you can give them as a treat or mix them into your pet's regular meals.",
        price: 10.99,
    },
    {
        name: 'VitalPaws',
        image: MedsImage,
        rating: RatingsImage,
        description: '"VitalPaws" offers a comprehensive range of solutions to cater to your pet"s individual health needs.',
        longDescription: "Make walks more enjoyable and secure with the PetComfort Deluxe Adjustable Collar. This stylish and durable collar is an essential accessory for pets of all sizes and breeds.The PetComfort collar is crafted from premium, weather-resistant nylon that stands up to daily use while still being gentle on your pet's skin and coat. It features a sturdy, easy-to-operate buckle for quick fastening and release, ensuring a hassle-free experience for you and your pet.Our collar is fully adjustable, ensuring a perfect fit for all pets, from small kittens and puppies to full-grown cats and dogs. The adjustable design allows for a comfortable fit that's not too tight or too loose, providing safety and comfort for your pet.This PetComfort collar comes with a robust metal D-ring for secure leash attachment, ensuring your pet stays connected and safe on walks, runs, or trips to the vet. The collar is also designed to hold your pet's ID tags, providing essential information should your pet ever get lost.",
        price: 15.99,
    }


];

export default products;