import { Model } from 'mongoose';

export type ICategories = {
  name: string;
};

export type CategoriesModel = Model<ICategories, Record<string, unknown>>;
