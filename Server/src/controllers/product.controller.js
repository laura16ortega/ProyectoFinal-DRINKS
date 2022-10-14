import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  let products = await Product.find();
  res.status(200).send(products);
};
