import mysql2 from "mysql2";

export const pool = mysql2
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "morning",
  })
  .promise();
