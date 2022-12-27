import { Request, Response } from 'express';
import * as productService from '../services/product.service';
import code from '../utils/status.code';

export async function createProduct(req: Request, res: Response) {
  try {
    const { name, amount } = req.body;
    const { type, message } = await productService.createProduct(name, amount);
    if (type === 'error') {
      return res.status(code.BAD_REQUEST).json(message);
    }
    res.status(code.CREATED).json(message);
  } catch (err: unknown) {
    res.status(code.INTERNAL_SERVER_ERROR).json({ type: 'error', message: err });
  }
}

export async function getAllProducts(_req: Request, res: Response) {
  try {
    const { message } = await productService.getAllProducts();
    res.status(code.OK).json(message);
  } catch (err: unknown) {
    res.status(code.INTERNAL_SERVER_ERROR).json({ type: 'error', message: err });
  }
}
