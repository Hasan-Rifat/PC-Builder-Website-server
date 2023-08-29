import { Model } from 'mongoose';

type KeyFeature = {
  keyName: string;
  value: string;
};

// Interface for the product document
export type IProducts = {
  _id: string;
  image: string;
  productName: string;
  category: string;
  status: string;
  price: number;
  description: string;
  keyFeatures: KeyFeature[];
  individualRating: number;
  averageRating: number;
  reviews: number;
};

export type ProductsModel = Model<IProducts, Record<string, unknown>>;
