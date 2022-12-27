import { Request, Response } from 'express';
import userService from '../services/user.service';
import { UserData } from '../interfaces/user.interfaces';
import code from '../utils/status.code';

async function createUser(req: Request, res: Response) {
  try {
    const { username, vocation, level, password } = req.body as UserData;
    const result = await userService.createUser(username, vocation, level, password);
    if (result.type === 'error') {
      return res.status(code.BAD_REQUEST).json({ message: result });
    }
    return res.status(code.CREATED).json({ token: result });
  } catch (err: unknown) {
    res.status(code.INTERNAL_SERVER_ERROR).send(err);
  }
}

export default {
  createUser,
};