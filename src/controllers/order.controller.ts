import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function selectAllOrders(req: Request, res: Response) {
  try {
    const result = await orderService.selectAllOrders();
    return res.status(200).json(result);
  } catch (error: unknown) {
    return res.status(500).json({ message: error });
  }
}

export default {
  selectAllOrders,
};
