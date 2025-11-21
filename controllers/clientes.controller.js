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

// PUT /clientes/:id ->
export const actualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email } = req.body;

    const clienteActualizado = await clientesModel.actualizarCliente(
      nombre,
      email,
      id
    );
    res.json(clienteActualizado);
  } catch (error) {
    console.error("Error actualizando cliente:", error);
    res.status(500).json({ error: "Error al actualizar cliente" });
  }
};

// DELETE /clientes/:id -> controller
export const eliminarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const clienteEliminado = await clientesModel.eliminarCliente(id);
    res.json(clienteEliminado);
  } catch (error) {
    console.error("Error eliminando cliente:", error);
    res.status(500).json({ error: "Error al eliminar cliente" });
  }
};
// GET /clientes/limit?limit=X -> controller
export const consultarClientesLimit = async (req, res) => {
  try {
    const { limit } = req.query; // Obtener el límite desde los query parameters
    const clientes = await clientesModel.consultarClientesLimit(limit);
    res.json(clientes);
  } catch (error) {
    console.error("Error consultando clientes:", error);
    res.status(500).json({ error: "Error al consultar clientes" });
  }
};
// GET /clientes/limit-orderby?limit=X&order_by=Y -> controller
export const consultarClientesLimitOrderBy = async (req, res) => {
  try {
    const { limit, order_by } = req.query; // Obtener el límite y order_by desde los query parameters
    const clientes = await clientesModel.consultarClientesLimitOrderBy({
      limit,
      order_by,
    });
    res.json(clientes);
  } catch (error) {
    console.error("Error consultando clientes:", error);
    res.status(500).json({ error: "Error al consultar clientes" });
  }
};
