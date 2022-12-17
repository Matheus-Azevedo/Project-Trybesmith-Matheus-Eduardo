import { Router } from 'express';
import * as productController from '../controllers/product.controller';

const productRouter = Router();

// GET /products
productRouter.get('/', productController.getAllProducts);

// POST /products
productRouter.post('/', productController.createProduct);

export default productRouter;
