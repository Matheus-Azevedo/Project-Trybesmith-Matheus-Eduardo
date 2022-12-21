import { Request, Response } from 'express';
import userService from '../services/user.service';
import { UserData } from '../interfaces/user.interfaces';

async function createUser(req: Request, res: Response) {
  try {
    const { username, vocation, level, password } = req.body as UserData;
    const result = await userService.createUser(username, vocation, level, password);
    if (result.type === 'error') {
      return res.status(400).json({ message: result });
    }
    return res.status(201).json({ token: result });
  } catch (err: unknown) {
    res.status(500).send(err);
  }
}

export default {
  createUser,
};