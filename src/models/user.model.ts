import connection from './connection';

async function insertUser(username: string, vocation: string, level: number, password: string) {
  const query = `INSERT INTO Trybesmith.users 
  (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const result = await connection.execute(query, [username, vocation, level, password]);
  return result;
}

export default { insertUser };