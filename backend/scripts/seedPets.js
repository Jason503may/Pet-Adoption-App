import mongoose from 'mongoose';
import Pet from '../models/Pet.js';

const pets = [
  // Dogs
  {
    name: 'Max',
    type: 'dog',
    breed: 'German Shepherd',
    age: 3,
    price: 25000,
    description: 'Loyal and intelligent German Shepherd, great with families',
    imageUrl: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95',
    available: true
  },
  {
    name: 'Luna',
    type: 'dog',
    breed: 'Labrador Retriever',
    age: 2,
    price: 28000,
    description: 'Friendly Labrador with a gentle temperament',
    imageUrl: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3',
    available: true
  },
  {
    name: 'Buddy',
    type: 'dog',
    breed: 'Golden Retriever',
    age: 4,
    price: 30000,
    description: 'Gentle and friendly Golden Retriever, perfect family companion',
    imageUrl: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24',
    available: true
  },
  {
    name: 'Charlie',
    type: 'dog',
    breed: 'Husky',
    age: 2,
    price: 35000,
    description: 'Energetic Husky with beautiful blue eyes',
    imageUrl: 'https://images.unsplash.com/photo-1590419690008-905895e8fe0d',
    available: true
  },
  {
    name: 'Bailey',
    type: 'dog',
    breed: 'Poodle',
    age: 3,
    price: 32000,
    description: 'Intelligent and elegant Poodle, hypoallergenic',
    imageUrl: 'https://images.unsplash.com/photo-1591768575198-88dac53fbd0a',
    available: true
  },

  // Puppies
  {
    name: 'Rocky',
    type: 'puppy',
    breed: 'Golden Retriever',
    age: 0.3,
    price: 35000,
    description: 'Adorable Golden Retriever puppy, 3 months old',
    imageUrl: 'https://images.unsplash.com/photo-1583511655826-05700442982b',
    available: true
  },
  {
    name: 'Daisy',
    type: 'puppy',
    breed: 'Beagle',
    age: 0.4,
    price: 30000,
    description: 'Playful Beagle puppy, great with kids',
    imageUrl: 'https://images.unsplash.com/photo-1597633425046-08f5110420b5',
    available: true
  },
  {
    name: 'Cooper',
    type: 'puppy',
    breed: 'Labrador',
    age: 0.2,
    price: 33000,
    description: 'Charming Labrador puppy, 2 months old',
    imageUrl: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0',
    available: true
  },
  {
    name: 'Bella',
    type: 'puppy',
    breed: 'Pomeranian',
    age: 0.3,
    price: 40000,
    description: 'Tiny and fluffy Pomeranian puppy',
    imageUrl: 'https://images.unsplash.com/photo-1587764379873-97837921fd44',
    available: true
  },
  {
    name: 'Leo',
    type: 'puppy',
    breed: 'German Shepherd',
    age: 0.4,
    price: 38000,
    description: 'Strong and healthy German Shepherd puppy',
    imageUrl: 'https://images.unsplash.com/photo-1599692392256-2d084495fe15',
    available: true
  },

  // Cats
  {
    name: 'Oliver',
    type: 'cat',
    breed: 'Persian',
    age: 2,
    price: 20000,
    description: 'Elegant Persian cat with a calm personality',
    imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5',
    available: true
  },
  {
    name: 'Bella',
    type: 'cat',
    breed: 'Siamese',
    age: 1.5,
    price: 22000,
    description: 'Beautiful Siamese cat, very affectionate',
    imageUrl: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8',
    available: true
  },
  {
    name: 'Shadow',
    type: 'cat',
    breed: 'Maine Coon',
    age: 3,
    price: 25000,
    description: 'Majestic Maine Coon with a gentle nature',
    imageUrl: 'https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28',
    available: true
  },
  {
    name: 'Luna',
    type: 'cat',
    breed: 'Ragdoll',
    age: 2,
    price: 23000,
    description: 'Affectionate Ragdoll cat, loves to cuddle',
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
    available: true
  },
  {
    name: 'Tiger',
    type: 'cat',
    breed: 'Bengal',
    age: 2.5,
    price: 28000,
    description: 'Exotic Bengal cat with stunning markings',
    imageUrl: 'https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a',
    available: true
  },

  // Kittens
  {
    name: 'Milo',
    type: 'kitten',
    breed: 'Maine Coon',
    age: 0.3,
    price: 25000,
    description: 'Adorable Maine Coon kitten, very playful',
    imageUrl: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91',
    available: true
  },
  {
    name: 'Lucy',
    type: 'kitten',
    breed: 'British Shorthair',
    age: 0.4,
    price: 23000,
    description: 'Cute British Shorthair kitten, loves to cuddle',
    imageUrl: 'https://images.unsplash.com/photo-1586042091284-bd35c8c1d917',
    available: true
  },
  {
    name: 'Whiskers',
    type: 'kitten',
    breed: 'Persian',
    age: 0.2,
    price: 26000,
    description: 'Fluffy Persian kitten with bright eyes',
    imageUrl: 'https://images.unsplash.com/photo-1574063413132-354db9f190fd',
    available: true
  },
  {
    name: 'Simba',
    type: 'kitten',
    breed: 'Orange Tabby',
    age: 0.3,
    price: 20000,
    description: 'Playful orange tabby kitten, full of energy',
    imageUrl: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e',
    available: true
  },
  {
    name: 'Misty',
    type: 'kitten',
    breed: 'Russian Blue',
    age: 0.4,
    price: 24000,
    description: 'Elegant Russian Blue kitten with silver coat',
    imageUrl: 'https://images.unsplash.com/photo-1561948955-570b270e7c36',
    available: true
  }
];

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/petadoption')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing pets
    await Pet.deleteMany({});
    console.log('Cleared existing pets');
    
    // Insert new pets
    await Pet.insertMany(pets);
    console.log('Added sample pets');
    
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
