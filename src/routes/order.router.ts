import { Router } from 'express';
import orderController from '../controllers/order.controller';

const orderRouter = Router();

// GET /orders
orderRouter.get('/', orderController.selectAllOrders);

export default orderRouter;