import { Router } from 'express';
import userController from '../controllers/user.controller';

const userRouter = Router();

// POST /users
userRouter.post('/', userController.createUser);

export default userRouter;