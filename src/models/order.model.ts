import { RowDataPacket } from 'mysql2';
import connection from './connection';

async function insertOrder(userId: number) {
  const query = `INSERT INTO Trybesmith.orders
  (user_id) VALUES (?)`;
  const result = await connection.execute(query, [userId]);
  return result[0] as RowDataPacket;
}

async function selectAllOrders() {
  const query = `
  SELECT O.id, O.user_id as userId, JSON_ARRAYAGG(PR.id) AS productsIds 
  FROM Trybesmith.orders AS O
  INNER JOIN Trybesmith.products AS PR ON O.id = PR.order_id
  GROUP BY O.id`;
  const [result] = await connection.execute(query);
  return result as RowDataPacket;
}

export default {
  insertOrder,
  selectAllOrders,
};