import express from 'express';
import { ProductRoutes } from '../modules/products/product.router';
import { CategoriesRoutes } from '../modules/categories/categories.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/products',
    router: ProductRoutes,
  },
  {
    path: '/categories',
    router: CategoriesRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.router));

export default router;
