import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IProducts } from './product.interface';
import { ProductServices } from './product.services';

const getAllProducts = catchAsync(async (req, res) => {
  const { category } = req.query;
  const result = await ProductServices.getAllProducts(category as string);
  sendResponse<IProducts[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Products fetched successfully',
    data: result,
  });
});

const getSingleBook = catchAsync(async (req, res) => {
  const result = await ProductServices.getSingleProduct(req.params.id);

  sendResponse<IProducts>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product fetched successfully',
    data: result,
  });
});

export const ProductController = {
  getAllProducts,
  getSingleBook,
};
