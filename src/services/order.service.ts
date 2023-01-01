import orderModel from '../models/order.model';
import userModel from '../models/user.model';
import productModel from '../models/product.model';

async function selectAllOrders() {
  const result = await orderModel.selectAllOrders();
  return { type: null, message: result };
}

async function createOrder(productsIds: number[], userName: string) {
  const user = await userModel.selectUser(userName);
  const order = await orderModel.insertOrder(user[0].id);
  await Promise.all(productsIds.map(async (productId) => {
    await productModel.updateProductById(productId, order.insertId);
  }));
  const orderResult = {
    userId: user[0].id,
    productsIds,
  };
  return { type: null, message: orderResult };
}

export default {
  selectAllOrders,
  createOrder,
};