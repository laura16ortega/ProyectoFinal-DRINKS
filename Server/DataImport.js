import express from "express";
import User from "./src/models/userModel.js";
import users from "./data/Users.js";
import Product from "./src/models/productModel.js";
import productos from "./data/Products.js";
import asyncHandler from "express-async-handler";

const importData = express.Router();

importData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

importData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(productos);
    res.send({ importProducts });
  })
);

export default importData;
