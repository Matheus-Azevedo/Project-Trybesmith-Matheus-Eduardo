import connection from './connection';

export async function insertOrder(userId: number, productId: number) {
  const query = `INSERT INTO Trybesmith.orders
  (user_id, product_id) VALUES (?, ?)`;
  const result = await connection.execute(query, [userId, productId]);
  return result;
}

export async function selectAllOrders() {
  const query = 'SELECT * FROM Trybesmith.orders';
  const result = await connection.execute(query);
  return result;
}