import loginModel from '../models/login.model';
import jwt from '../authentication/JWT';

async function login(username: string, password: string) {
  const result = await loginModel.selectUser(username, password);
  if (result.length === 0) {
    return { type: 'error', message: 'Username or password invalid' };
  }
  const finalResult = jwt.createToken(username);
  return { type: 'success', message: finalResult };
}

export default { login };