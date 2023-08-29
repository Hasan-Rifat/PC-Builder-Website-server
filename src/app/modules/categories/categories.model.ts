import { Schema, model } from 'mongoose';
import { CategoriesModel, ICategories } from './categories.interface';

// Define the schema
const categorySchema = new Schema<ICategories, CategoriesModel>({
  name: String,
});

export const Categories = model<ICategories, CategoriesModel>(
  'Categories',
  categorySchema
);
