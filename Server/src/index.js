import express from "express";
import productos from "../data/Products.js";
import products from "./routes/product.route.js";
import dotenv from "dotenv";
import connectDatabase from "../config/MongoDb.js";

dotenv.config();
connectDatabase();
const app = express();
const PORT = process.env.PORT || 3001;

//LOAD PRODUCT FROM SERVER
app.get("/api/products", (req, res) => {
  res.json(productos);
});

//LOAD SINGLE PRODUCT FROM SERVER
app.get("/api/products/:id", (req, res) => {
  const product = productos.find((p) => p.id === req.params.id);
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => console.log("Server iniciado en el puerto: " + PORT));

app.use("/products", products);
