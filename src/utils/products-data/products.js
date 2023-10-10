
import { storage,db } from '../firebase/firebase.utils.js';
import { ref, getDownloadURL } from "firebase/storage";
import {  addDoc, collection } from "firebase/firestore";

const categories = ["toy", "food", "medicines", "accessories"];

async function getImageURLFromStorage(pathInStorage) {
    const imageRef = ref(storage, pathInStorage);

    return getDownloadURL(imageRef);
}

const productNamesByCategory = {
    toy: [
        "Rubber Ball",
        "Feather Wand",
        "Squeaky Bone",
        "Tug Rope",
        "Laser Pointer",
        "Plush Bunny",
        "Catnip Mouse",
        "Interactive Puzzle",
        "Chew Stick",
        "Flying Disc"
    ],
    food: [
        "Puppy Kibble",
        "Kitten Dry Food",
        "Organic Bird Seed",
        "Aquarium Fish Flakes",
        "Reptile Vitamin Mix",
        "Senior Dog Food",
        "Canned Tuna Mix",
        "Parrot Fruit Blend",
        "Freshwater Fish Pellets",
        "Turtle Calcium Sticks"
    ],
    medicines: [
        "Flea & Tick Spray",
        "Worming Tablets",
        "Feather Plucking Relief",
        "Aquarium Water Cleaner",
        "Joint Support Supplement",
        "Anti-Itch Cream",
        "Eye Cleaning Drops",
        "Digestive Probiotics",
        "Skin & Coat Formula",
        "Mite Treatment Spray"
    ],
    accessories: [
        "Reflective Collar",
        "Aquarium Decor Castle",
        "Heated Pet Bed",
        "Bird Cage Swing",
        "Cat Litter Box",
        "Dog Grooming Kit",
        "Reptile Terrarium",
        "Hamster Wheel",
        "Leather Leash",
        "Portable Water Bowl"
    ]
};

function getProductName(category, index) {
    const names = productNamesByCategory[category];
    return names[index % names.length]; // Use modulo to cycle through product names if index exceeds length
}

const descriptions = {
    toy: {
        short: "Entertaining and safe toy for pets.",
        long: "This toy provides endless entertainment for your pet, crafted with love and care. It's made of non-toxic materials and promotes active play, ensuring your pet's well-being and happiness. Perfect for indoor and outdoor play."
    },
    food: {
        short: "Nutritious and tasty food for pets.",
        long: "Our food products are crafted with a blend of essential nutrients, vitamins, and minerals. It's formulated to meet the dietary needs of your pet, ensuring growth, energy, and overall health. Made with natural ingredients."
    },
    medicines: {
        short: "Effective and vet-approved medicine.",
        long: "This medicine addresses common health issues in pets, ensuring swift recovery and wellness. Made with natural ingredients, it's safe and vet-approved. Consult with your vet before use."
    },
    accessories: {
        short: "High-quality and functional accessory.",
        long: "Our range of accessories is not only stylish but also functional. Made with premium materials, they're designed to provide comfort and serve their purpose efficiently. A must-have for every pet owner."
    }
};



async function generateProducts() {
    const products = [];
    for (let cat of categories) {
        for (let i = 0; i < 10; i++) {
            const productName = getProductName(cat, i);
            const storageImagePath = `petstore-images/${cat}/image${i + 1}.png`; // We use i+1 because array indices start at 0 but your images probably start at 1
            const imageUrl = await getImageURLFromStorage(storageImagePath);

            products.push({
                name: productName,
                imageUrl: imageUrl,
                rating: Math.floor(Math.random() * 5) + 1,
                category: cat,
                shortDescription: descriptions[cat].short,
                longDescription: `${descriptions[cat].long} This item, ${productName}, is one of our bestsellers and has received positive feedback from our customers.`,
                price: (Math.floor(Math.random() * 50) + 10) * 100 // Price between $10 to $60 in cents
            });
        }
    }
    return products;
}

async function saveProductToFirestore(product) {
    try {
        const docRef = await addDoc(collection(db, product.category), product);
        console.log(`Document written with ID: ${docRef.id}`);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

(async () => {
    try {
        const petStoreProducts = await generateProducts();
        console.log('Generated products with actual image URLs from Firebase Storage:', petStoreProducts);

        // Saving each product to its respective Firestore collection
        for (let product of petStoreProducts) {
            await saveProductToFirestore(product);
        }

    } catch (error) {
        console.error('Error generating or saving products:', error);
    }
})();

// (async () => {
//     try {
//         const petStoreProducts = await generateProducts();
//         console.log('Generated products with actual image URLs from Firebase Storage:', petStoreProducts);
//     } catch (error) {
//         console.error('Error generating products:', error);
//     }
// })();



