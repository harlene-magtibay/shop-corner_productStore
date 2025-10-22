import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';

// express.Router() lets you define routes in separate files instead of writing everything inside server.js
const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

// Exports the router so it can be used in server.js
export default router;