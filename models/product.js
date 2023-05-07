const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
    trim: true,
    unique: true,
  },
  brand: {
    type: String,
    require: true,
    trim: true,
    maxlength: [50, "brand must be less than 50 characters"],
  },
  category: {
    type: String,
    require: true,
    trim: true,
    maxlength: [50, "category must be less than 50 characters"],
  },
  name: {
    type: String,
    require: true,
    trim: true,
    maxlength: [50, "Name must be less than 50 characters"],
  },
  price: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
