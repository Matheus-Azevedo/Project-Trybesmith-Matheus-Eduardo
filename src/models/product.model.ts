import { RowDataPacket } from 'mysql2';
import connection from './connection';

async function insertProduct(name: string, amount: string) {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute(query, [name, amount]);
  return result as RowDataPacket;
}

async function selectAllProducts() {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute(query);
  return result as RowDataPacket[];
}

async function updateProductById(id: number, orderId: number) {
  const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
  const [result] = await connection.execute(query, [orderId, id]);
  return result as RowDataPacket;
}

export default {
  insertProduct,
  selectAllProducts,
  updateProductById,
};
