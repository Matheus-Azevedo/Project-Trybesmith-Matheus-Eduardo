import { Request, Response, NextFunction } from 'express';
import code from '../utils/status.code';

async function nameValidation(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  if (!name) {
    return res.status(code.BAD_REQUEST).json({ message: '"name is" required' });
  }
  if (typeof name !== 'string') {
    return res.status(code.UNPROCESSABLE_ENTITY).json({ message: '"name" must be a string' });
  }
  if (name.length < 3) {
    return res
      .status(code.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
}

async function amountValidation(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;
  if (!amount) {
    return res.status(code.BAD_REQUEST).json({ message: '"amount" is required' });
  }
  if (typeof amount !== 'string') {
    return res.status(code.UNPROCESSABLE_ENTITY).json({ message: '"amount" must be a string' });
  }
  if (amount.length < 3) {
    return res
      .status(code.UNPROCESSABLE_ENTITY)
      .json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
}

export default {
  nameValidation,
  amountValidation,
};
