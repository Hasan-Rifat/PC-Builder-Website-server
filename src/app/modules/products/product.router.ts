import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getSingleBook);

export const ProductRoutes = router;
