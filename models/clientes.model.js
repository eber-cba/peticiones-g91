import pool from "../config/db.js";

// Obtener la fecha actual
export const getDate = async () => {
  const result = await pool.query("SELECT NOW()");
  return result.rows[0];
};

// Agregar un nuevo cliente
export const agregarCliente = async (nombre, email) => {
  const consulta =
    "INSERT INTO clientes (id, nombre, email) VALUES (DEFAULT, $1, $2) RETURNING *";
  const values = [nombre, email];
  const result = await pool.query(consulta, values);
  return result.rows[0];
};

// Consultar todos los clientes
export const consultarClientes = async () => {
  const result = await pool.query("SELECT * FROM clientes");
  return result.rows;
};

// Actualizar un cliente
export const actualizarCliente = async (nombre, email, id) => {
  const consulta = "UPDATE clientes SET nombre = $1, email = $2 WHERE id = $3 ";
  const values = [nombre, email, id];
  const result = await pool.query(consulta, values);
  return result.rows[0];
};

// Eliminar un cliente
export const eliminarCliente = async (id) => {
  const consulta = "DELETE FROM clientes WHERE id = $1";
  const values = [id];
  const result = await pool.query(consulta, values);
  return result.rows[0];
};
