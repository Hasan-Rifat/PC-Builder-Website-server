import express from 'express';
import { CategoriesController } from './categories.controller';

const router = express.Router();

router.get('/', CategoriesController.getAllCategories);

router.get('/:id', CategoriesController.getSingleCategories);

export const CategoriesRoutes = router;
