import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../src/models/productModel.js";
import protect from "../Middleware/AuthMiddleware.js";

const productRoute = express.Router();

//GET ALL PRODUCTS
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const keyword = req.query.keyword
      ? { name: { $regex: req.query.keyword, $options: "i" } }
      : {};
    const products = await Product.find({ ...keyword });
    res.json(products);
  })
);

//GET SINGLE PRODUCT
productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      throw new Error("Product not found");
    }
  })
);

//PRODUCT REVIEW
productRoute.post(
  "/:id/review",
  protect,
  asyncHandler(async (req, res) => {

    const { rating, comment, name } = req.body;

    const product = await Product.findById(req.params.id);
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );
      if (alreadyReviewed) {
        res.status(400);
        throw new Error("Product already reviewed");
      }
      const review = {
        name: req.user.fullName,
        fullName: req.user.fullName,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();
      res.status(201).json({ message: "Review added" });
    } else {
      throw new Error("Product not found");
    }
  })
);
export default productRoute;
