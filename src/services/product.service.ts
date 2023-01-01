import productModel from '../models/product.model';

export async function createProduct(name: string, amount: string) {
  const result = await productModel.insertProduct(name, amount);
  if (result.affectedRows === 0) {
    return { type: 'error', message: 'Product not created' };
  }
  const finalResult = { id: result.insertId, name, amount };
  return { type: null, message: finalResult };
}

export async function getAllProducts() {
  const result = await productModel.selectAllProducts();
  return { type: null, message: result };
}
