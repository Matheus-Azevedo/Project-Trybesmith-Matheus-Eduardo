import connection from './connection';

async function selectUser(username: string, password: string) {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
  const result = await connection.execute(query, [username, password]);
  return result;
}

export default { selectUser };