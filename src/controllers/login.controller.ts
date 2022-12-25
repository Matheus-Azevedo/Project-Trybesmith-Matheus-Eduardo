import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const result = await loginService.login(username, password);
    if (result.type === 'error') {
      return res.status(401).json({ message: result.message });
    }
    return res.status(200).json({ token: result.message });
  } catch (error: unknown) {
    return res.status(500).json({ message: error });
  }
}

export default {
  login,
};