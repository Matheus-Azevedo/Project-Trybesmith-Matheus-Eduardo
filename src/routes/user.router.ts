import { Router } from 'express';
import userController from '../controllers/user.controller';
import user from '../middlewares/user.validation'; 

const userRouter = Router();

// POST /users
userRouter.post(
  '/',
  user.nameValidation,
  user.vocationValidation,
  user.levelValidation,
  user.passwordValidation,
  userController.createUser,
);

export default userRouter;