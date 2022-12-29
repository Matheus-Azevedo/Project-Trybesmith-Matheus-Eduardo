import { Request, Response, NextFunction } from 'express';
import code from '../utils/status.code';

async function nameValidation(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  if (!username) {
    return res.status(code.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (typeof username !== 'string') {
    return res.status(code.UNPROCESSABLE_ENTITY).json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res
      .status(code.UNPROCESSABLE_ENTITY)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  next();
}

async function vocationValidation(req: Request, res: Response, next: NextFunction) {
  const { vocation } = req.body;
  if (!vocation) {
    return res.status(code.BAD_REQUEST).json({ message: '"vocation" is required' });
  }
  if (typeof vocation !== 'string') {
    return res.status(code.UNPROCESSABLE_ENTITY).json({ message: '"vocation" must be a string' });
  }
  if (vocation.length < 3) {
    return res
      .status(code.UNPROCESSABLE_ENTITY)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }
  next();
}

async function levelValidation(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;
  if (level < 1) {
    return res
      .status(code.UNPROCESSABLE_ENTITY)
      .json({ message: '"level" must be greater than or equal to 1' });
  }
  if (!level) {
    return res.status(code.BAD_REQUEST).json({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return res.status(code.UNPROCESSABLE_ENTITY).json({ message: '"level" must be a number' });
  }
  next();
}

async function passwordValidation(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (!password) {
    return res.status(code.BAD_REQUEST).json({ message: '"password" is required' });
  }
  if (typeof password !== 'string') {
    return res.status(code.UNPROCESSABLE_ENTITY).json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return res
      .status(code.UNPROCESSABLE_ENTITY)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  next();
}

export default {
  nameValidation,
  vocationValidation,
  levelValidation,
  passwordValidation,
};