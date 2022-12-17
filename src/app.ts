// Commit
import express, { Application } from 'express';
import productRouter from './routes/product.router';

const app: Application = express();

app.use(express.json());
app.use('/products', productRouter);

export default app;
