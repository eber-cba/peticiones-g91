import express from "express";
import morgan from "morgan";
import clientesRoute from "../routes/clientes.route.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", clientesRoute);

// Start server after middlewares and routes are configured
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
