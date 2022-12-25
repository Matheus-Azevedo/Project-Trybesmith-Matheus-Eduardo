import { Router } from 'express';
import loginController from '../controllers/login.controller';
import loginValidation from '../middlewares/login.validation';

const loginRouter = Router();

// POST /login
loginRouter.post(
  '/',
  loginValidation.nameValidation,
  loginValidation.passwordValidation,
  loginController.login,
);

export default loginRouter;