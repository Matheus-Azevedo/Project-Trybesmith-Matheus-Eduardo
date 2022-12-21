import userModel from '../models/user.model';
import jwt from '../authentication/JWT';

async function createUser(
  username: string,
  vocation: string,
  level: number,
  password:string,
) {
  const result = await userModel.insertUser(username, vocation, level, password);
  if (result.affectedRows === 0) {
    return { type: 'error', message: 'User not created' };
  }
  const finalResult = jwt.createToken(username);
  return { type: null, message: finalResult };
}

export default {
  createUser,
};
