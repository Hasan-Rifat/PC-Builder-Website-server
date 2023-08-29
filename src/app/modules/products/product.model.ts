import { Schema, model } from 'mongoose';
import { IProducts, ProductsModel } from './product.interface';

const productSchema = new Schema<IProducts, ProductsModel>({
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

export const Products = model<IProducts, ProductsModel>(
  'Products',
  productSchema
);
