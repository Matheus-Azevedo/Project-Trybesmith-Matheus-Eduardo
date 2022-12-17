import { RowDataPacket } from 'mysql2';
import connection from './connection';

export async function insertProduct(name: string, amount: string) {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute(query, [name, amount]);
  return result as RowDataPacket;
}

export async function selectAllProducts() {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute(query);
  return result as RowDataPacket[];
}
