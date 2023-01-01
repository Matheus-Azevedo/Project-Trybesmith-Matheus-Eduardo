import { Request, Response, NextFunction } from 'express';
import code from '../utils/status.code';

async function productIdsValidation(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res.status(code.BAD_REQUEST).json({ message: '"productsIds" is required' });
  }
  if (!Array.isArray(productsIds)) {
    return res
      .status(code.UNPROCESSABLE_ENTITY)
      .json({ message: '"productsIds" must be an array' });
  }
  if (productsIds.length === 0) {
    return res
      .status(code.UNPROCESSABLE_ENTITY)
      .json({ message: '"productsIds" must include only numbers' });
  }
  next();
}

export default {
  productIdsValidation,
};