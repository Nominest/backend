import { pool } from "../config/mysql-config.js";

export async function getProducts(limit) {
  const [rows] = await pool.query(`SELECT emp_no FROM salaries limit ${limit}`);
  return rows;
}
