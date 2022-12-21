// import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

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
    return payLoad;
  } catch (error: unknown) {
    return { isError: true, message: error };
  }
}

// const validateToken = async (req: Request, res: Response, next: any) => {
//   const { authorization } = req.headers;
//   if (!authorization) {
//     return res
//       .status(401)
//       .json({ message: 'Token not found' });
//   }
//   const payLoad = await verifyToken(authorization);
//   if (payLoad.isError) {
//     return res
//       .status(401)
//       .json({ message: 'Expired or invalid token' });
//   }
//   req.user = payLoad.data;
//   next();
// };

export default {
  createToken,
  verifyToken,
  // validateToken,
};