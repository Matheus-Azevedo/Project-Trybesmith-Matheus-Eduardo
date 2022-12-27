import { Router } from 'express';
import * as productController from '../controllers/product.controller';
import product from '../middlewares/product.validation';

const productRouter = Router();

// GET /products
productRouter.get('/', productController.getAllProducts);

// POST /products
productRouter.post(
  '/',
  product.nameValidation,
  product.amountValidation,
  productController.createProduct,
); 

export default productRouter;
