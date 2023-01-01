import { Router } from 'express';
import orderController from '../controllers/order.controller';
import jwt from '../authentication/JWT';
import order from '../middlewares/order.validation';

const orderRouter = Router();

// GET /orders
orderRouter.get('/', orderController.selectAllOrders);

// POST /orders
orderRouter.post(
  '/',
  jwt.validateToken,
  order.productIdsValidation,
  orderController.createOrder,
);

export default orderRouter;