import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); //middleware to accept json data in the req.body

// Registers the routes. Every route inside product.route.js will start with /api/products.
app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("/{*any}", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

// Starts the server on port 5000 and connects to MongoDB.
app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT)
});