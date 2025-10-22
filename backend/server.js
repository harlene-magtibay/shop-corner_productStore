import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //middleware to accept json data in the req.body

// Registers the routes. Every route inside product.route.js will start with /api/products.
app.use("/api/products", productRoutes);

// Starts the server on port 5000 and connects to MongoDB.
app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT)
});