import pool from "../config/db.js";
import format from "pg-format";

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
// consulta con limit
export const consultarClientesLimit = async (limit) => {
  const consulta = "SELECT * FROM clientes LIMIT $1";
  const result = await pool.query(consulta, [limit]);
  return result.rows;
};
// consulta con limit y order_by

export const consultarClientesLimitOrderBy = async ({
  limit = 10,
  order_by = "id_ASC",
}) => {
  const [nombre] = order_by.split("_"); // un destructuring de un array para obtener el nombre de la columna
  const formattedQuery = format(
    "SELECT * FROM clientes order by %s LIMIT %s",
    nombre,
    limit
  );
  const { rows: clientes } = await pool.query(formattedQuery);
  return clientes;
};
