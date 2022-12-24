import orderModel from '../models/order.model';

async function selectAllOrders() {
  const result = await orderModel.selectAllOrders();
  return result;
}

export default {
  selectAllOrders,
};