import * as productCtrl from "../controllers/product.controller.js";
import express from "express";
const router = express.Router();

router.get("/", productCtrl.getProducts);

export default router;
