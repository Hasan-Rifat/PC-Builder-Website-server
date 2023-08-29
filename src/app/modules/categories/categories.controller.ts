import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ICategories } from './categories.interface';
import { CategoriesService } from './categories.services';

const getAllCategories = catchAsync(async (req, res) => {
  const result = await CategoriesService.getAllCategories();

  sendResponse<ICategories[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories fetched successfully',
    data: result,
  });
});

const getSingleCategories = catchAsync(async (req, res) => {
  const result = await CategoriesService.getSingleCategories(req.params.id);

  sendResponse<ICategories>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories fetched successfully',
    data: result,
  });
});

export const CategoriesController = {
  getAllCategories,
  getSingleCategories,
};
