import { IProducts } from './product.interface';
import { Products } from './product.model';

const getAllProducts = async (category: string): Promise<IProducts[]> => {
  let query = {};

  if (category) {
    query = {
      category: { $regex: category, $options: 'i' },
    };
  }

  const result: IProducts[] = await Products.find(query);
  return result;
};

const getSingleProduct = async (id: string): Promise<IProducts | null> => {
  const result = await Products.findById(id);
  return result;
};

export const ProductServices = {
  getAllProducts,
  getSingleProduct,
};
