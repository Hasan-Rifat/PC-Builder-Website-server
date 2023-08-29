"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    image: String,
    productName: String,
    category: String,
    status: String,
    price: Number,
    description: String,
    keyFeatures: [
        {
            keyName: String,
            value: String,
        },
    ],
    individualRating: Number,
    averageRating: Number,
    reviews: Number,
});
exports.Products = (0, mongoose_1.model)('Products', productSchema);
