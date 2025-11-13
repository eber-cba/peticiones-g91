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

export const actualizarCliente = async (nombre, email, id) => {
  const consulta = "UPDATE clientes SET nombre = $1, email = $2 WHERE id = $3 ";
  const values = [nombre, email, id];
  const result = await pool.query(consulta, values);
  return result.rows[0];
};
