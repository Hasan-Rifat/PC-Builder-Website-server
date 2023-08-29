"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_router_1 = require("../modules/products/product.router");
const categories_router_1 = require("../modules/categories/categories.router");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/products',
        router: product_router_1.ProductRoutes,
    },
    {
        path: '/categories',
        router: categories_router_1.CategoriesRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.router));
exports.default = router;
