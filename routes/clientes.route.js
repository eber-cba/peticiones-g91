import express from "express";
import * as controller from "../controllers/clientes.controller.js";

const router = express.Router();

// GET /clientes -> controller
router.get("/clientes", controller.consultarClientes);

// POST /clientes -> controller
router.post("/clientes", controller.crearCliente);

export default router;
