import { Request, Response, NextFunction } from 'express';
import code from '../utils/status.code';

async function nameValidation(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  if (!username) {
    return res.status(code.BAD_REQUEST).json({ message: '"username" is required' });
  }
  next();
}

async function passwordValidation(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (!password) {
    return res.status(code.BAD_REQUEST).json({ message: '"password" is required' });
  }
  next();
}

export default {
  nameValidation,
  passwordValidation,
};