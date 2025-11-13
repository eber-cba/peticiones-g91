import * as clientesModel from "../models/clientes.model.js";

// GET /clientes -> controller
export const consultarClientes = async (req, res) => {
  try {
    const clientes = await clientesModel.consultarClientes();
    res.json(clientes);
  } catch (error) {
    console.error("Error consultando clientes:", error);
    res.status(500).json({ error: "Error al consultar clientes" });
  }
};

// POST /clientes -> controller
export const crearCliente = async (req, res) => {
  try {
    const { nombre, email } = req.body;

    // Validar que los campos requeridos estén presentes
    if (!nombre || !email) {
      return res.status(400).json({ error: "Nombre y email son requeridos" });
    }

    const nuevoCliente = await clientesModel.agregarCliente(nombre, email);
    res.status(201).json({
      mensaje: "Cliente agregado exitosamente",
      cliente: nuevoCliente,
    });
  } catch (error) {
    console.error("Error agregando cliente:", error);
    res.status(500).json({ error: "Error al agregar cliente" });
  }
};

// PUT /clientes/:id -> controller
