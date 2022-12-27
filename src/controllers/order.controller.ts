import { Request, Response } from 'express';
import orderService from '../services/order.service';
import code from '../utils/status.code';

async function selectAllOrders(req: Request, res: Response) {
  try {
    const result = await orderService.selectAllOrders();
    return res.status(code.OK).json(result);
  } catch (error: unknown) {
    return res.status(code.INTERNAL_SERVER_ERROR).json({ message: error });
  }
}

export default {
  selectAllOrders,
};
