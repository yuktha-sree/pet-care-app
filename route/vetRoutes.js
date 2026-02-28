const express = require('express');
const router = express.Router();
const Vet = require('../models/Vet');

// Get all vets
router.get('/', async (req, res) => {
  try {
    const vets = await Vet.find();
    res.json(vets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get vet by name
router.get('/:name', async (req, res) => {
  try {
    const vets = await Vet.find({ name: req.params.name });
    res.json(vets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new vet
router.post('/', async (req, res) => {
  try {
    const newVet = new Vet(req.body);
    const savedVet = await newVet.save();
    res.status(201).json(savedVet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update vet by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedVet = await Vet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedVet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete vet by ID
router.delete('/:id', async (req, res) => {
  try {
    await Vet.findByIdAndDelete(req.params.id);
    res.json({ message: "Vet deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
