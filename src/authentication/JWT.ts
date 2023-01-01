import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import status from '../utils/status.code';

require('dotenv/config');

// Secret key
const secret = process.env.JWT_SECRET as string;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

function createToken(userData: string) {
  const token = jwt.sign({ data: userData }, secret, jwtConfig as object);
  return token;
}

function verifyToken(authorization: string) {
  try {
    const payLoad = jwt.verify(authorization, secret);
    return { payLoad };
  } catch (error: unknown) {
    return { isError: true, message: error };
  }
}

async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(status.UNAUTHORIZED)
      .json({ message: 'Token not found' });
  }
  const { isError, payLoad } = verifyToken(authorization);
  if (isError) {
    return res
      .status(status.UNAUTHORIZED)
      .json({ message: 'Invalid token' });
  }
  req.headers.user = (payLoad as JwtPayload).data;
  next();
}

export default {
  createToken,
  verifyToken,
  validateToken,
};