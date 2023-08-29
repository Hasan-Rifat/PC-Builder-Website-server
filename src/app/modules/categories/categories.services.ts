import httpStatus from 'http-status';
import mongoose from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { ICategories } from './categories.interface';
import { Categories } from './categories.model';

const getAllCategories = async (): Promise<ICategories[]> => {
  const result = await Categories.find({});
  return result;
};

const getSingleCategories = async (id: string): Promise<ICategories | null> => {
  if (!mongoose.isValidObjectId(id)) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid book ID.');
  }
  const result = await Categories.findById(id);
  return result;
};

export const CategoriesService = {
  getAllCategories,
  getSingleCategories,
};
