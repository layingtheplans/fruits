import express from 'express';

import { getFruits, getFruitByName, createFruit, deleteFruit } from '../controllers/fruits.js';

const router = express.Router();

router.get('/', getFruits);
router.get('/:name', getFruitByName);
router.post('/', createFruit);
router.delete('/:id', deleteFruit);

export default router;