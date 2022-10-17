import express from "express";
import productos from "../data/Products.js";
import products from "./routes/product.route.js";
import dotenv from "dotenv";
import connectDatabase from "../config/MongoDb.js";
import importData from "../DataImport.js";
import productRoute from "../Routes/ProductRoutes.js";
import { errorHandler, notFound } from "../Middleware/Errors.js";

dotenv.config();
connectDatabase();
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 3001;

//API
app.use(cors());
app.use("/api/import", importData);
app.use("/api/products", productRoute);
//ERROR HANDLER
app.use(notFound);
app.use(errorHandler);
//LOAD PRODUCT FROM SERVER
// app.get("/api/products", (req, res) => {
//   res.json(productos);
// });

// LOAD SINGLE PRODUCT FROM SERVER
app.get("/api/products/:id", (req, res) => {
  const product = productos.find((p) => p.id === req.params.id);
  res.json(product);
});

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

app.listen(PORT, () => console.log("Server iniciado en el puerto: " + PORT));

app.use("/products", products);
