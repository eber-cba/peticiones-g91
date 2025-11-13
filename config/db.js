import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "0529",
  database: "gestion_clientes",
  allowExitOnIdle: true,
});

export default pool;
