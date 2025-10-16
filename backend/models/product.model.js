import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true // createdAt, updatedAt
});

//tell mongoose to create a model named Product using productSchema. Each product should have these fields
const Product = mongoose.model("Product", productSchema); 



export default Product;