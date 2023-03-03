import { pool } from "../config/mysql-config.js";

export async function getProducts(limit) {
  const [rows] = await pool.query(`SELECT emp_no FROM salaries limit ${limit}`);
  return rows;
}

export async function createUser(user) {
  const [rows] = await pool.query(`INSERT INTO user values ${user}`);
  return rows;
}
