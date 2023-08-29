"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = void 0;
const mongoose_1 = require("mongoose");
// Define the schema
const categorySchema = new mongoose_1.Schema({
    name: String,
});
exports.Categories = (0, mongoose_1.model)('Categories', categorySchema);
