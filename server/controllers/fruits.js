import express from 'express';
import mongoose from 'mongoose';
import FruitMessage from '../models/fruitMessage.js';

const router = express.Router();

export const getFruits = async (req, res) => { 
    try {
        return res.status(200);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getFruitByName = async (req, res) => { 
    try {
        const fruit = await FruitMessage.find({'name': {'$regex': `^${req.params.name}$`, $options: 'i'}});
        
        res.status(200).json(fruit);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createFruit = async (req, res) => {
    const { name, weight, season, image } = req.body;

    const newFruitMessage = new FruitMessage({ name, weight, season, image })

    try {
        await newFruitMessage.save();

        res.status(201).json(newFruitMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteFruit = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No fruit with id: ${id}`);

    await FruitMessage.findByIdAndRemove(id);

    res.json({ message: "Fruit deleted successfully." });
}


export default router;