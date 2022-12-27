import { Request, Response } from 'express';
import loginService from '../services/login.service';
import code from '../utils/status.code';

async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const result = await loginService.login(username, password);
    if (result.type === 'error') {
      return res.status(code.UNAUTHORIZED).json({ message: result.message });
    }
    return res.status(code.OK).json({ token: result.message });
  } catch (error: unknown) {
    return res.status(code.INTERNAL_SERVER_ERROR).json({ message: error });
  }
}

export default {
  login,
};