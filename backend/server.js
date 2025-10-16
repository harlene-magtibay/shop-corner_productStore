import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json()); //middleware to accept json data in the req.body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000')
});

// K7uKWUV24o5NThue