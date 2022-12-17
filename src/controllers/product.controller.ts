import { Request, Response } from 'express';
import * as productService from '../services/product.service';

export async function createProduct(req: Request, res: Response) {
  try {
    const { name, amount } = req.body;
    const { type, message } = await productService.createProduct(name, amount);
    if (type === 'error') {
      return res.status(400).json(message);
    }
    res.status(201).json(message);
  } catch (err: unknown) {
    res.status(500).json({ type: 'error', message: err });
  }
}

export async function getAllProducts(_req: Request, res: Response) {
  try {
    const { message } = await productService.getAllProducts();
    res.status(200).json(message);
  } catch (err: unknown) {
    res.status(500).json({ type: 'error', message: err });
  }
}
