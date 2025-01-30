import express from 'express';
import Pet from '../models/Pet.js';
import Purchase from '../models/Purchase.js';
import User from '../models/User.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all pets
router.get('/', async (req, res) => {
  try {
    const { type } = req.query;
    const filter = type ? { type, available: true } : { available: true };
    const pets = await Pet.find(filter);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new pet (admin only)
router.post('/', auth, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Only admins can add pets' });
    }
    const pet = new Pet(req.body);
    const newPet = await pet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Purchase pets
router.post('/purchase', auth, async (req, res) => {
  try {
    const { pets } = req.body;
    const petIds = pets.map(p => p.petId);
    
    // Calculate total amount and verify pets are available
    const petDetails = await Pet.find({ _id: { $in: petIds }, available: true });
    
    if (petDetails.length !== petIds.length) {
      return res.status(400).json({ message: 'Some pets are no longer available' });
    }
    
    const totalAmount = petDetails.reduce((sum, pet) => sum + pet.price, 0);
    
    // Create purchase record
    const purchase = new Purchase({
      user: req.user._id,
      pets: petDetails.map(pet => ({
        pet: pet._id,
        price: pet.price
      })),
      totalAmount
    });
    
    // Update pets availability
    await Pet.updateMany(
      { _id: { $in: petIds } },
      { available: false }
    );

    // Add pets to user's purchasedPets
    await User.findByIdAndUpdate(
      req.user._id,
      { $push: { purchasedPets: { $each: petIds } } }
    );
    
    await purchase.save();
    res.status(201).json({ message: 'Purchase successful', purchase });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a pet (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Only admins can delete pets' });
    }
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json({ message: 'Pet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user's purchased pets
router.get('/purchased', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('purchasedPets');
    res.json(user.purchasedPets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
