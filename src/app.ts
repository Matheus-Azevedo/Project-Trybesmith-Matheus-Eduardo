// Commit
import express, { Application } from 'express';
import orderRouter from './routes/order.router';
import productRouter from './routes/product.router';
import userRouter from './routes/user.router';

const app: Application = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
