import express from "express";
import * as controller from "../controllers/clientes.controller.js";

const router = express.Router();

// GET /clientes/limit-orderby?limit=X&order_by=Y -> controller
router.get("/clientes/limit-orderby", controller.consultarClientesLimitOrderBy);

// GET /clientes/limit?limit=X -> controller
router.get("/clientes/limit", controller.consultarClientesLimit);

// GET /clientes -> controller
router.get("/clientes", controller.consultarClientes);

// POST /clientes -> controller
router.post("/clientes", controller.crearCliente);

// PUT /clientes/:id -> controller
router.put("/clientes/:id", controller.actualizarCliente);

// DELETE /clientes/:id -> controller
router.delete("/clientes/:id", controller.eliminarCliente);
export default router;
