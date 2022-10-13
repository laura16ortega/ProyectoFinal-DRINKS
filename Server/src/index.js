import express from "express";
import products from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Server iniciado en el puerto: " + PORT));

app.use("/products", products);
