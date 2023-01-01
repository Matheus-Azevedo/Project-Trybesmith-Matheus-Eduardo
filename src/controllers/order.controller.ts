import { Request, Response } from 'express';
import orderService from '../services/order.service';
import code from '../utils/status.code';

async function selectAllOrders(_req: Request, res: Response) {
  try {
    const result = await orderService.selectAllOrders();
    return res.status(code.OK).json(result.message);
  } catch (error: unknown) {
    return res.status(code.INTERNAL_SERVER_ERROR).json({ message: error });
  }
}

async function createOrder(req: Request, res: Response) {
  try {
    const { productsIds } = req.body;
    const { user } = req.headers;
    const result = await orderService.createOrder(productsIds as number[], user as string);
    return res.status(code.CREATED).json(result.message);
  } catch (error) {
    return res.status(code.INTERNAL_SERVER_ERROR).json({ message: error });
  }
}

export default {
  selectAllOrders,
  createOrder,
};
