import mysql from "mysql2/promise"; // uses promise for async/await
import dotenv from "dotenv";
dotenv.config();

const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

try {
  await db.connect();
  console.log("Connected to MySQL Database");
} catch (error) {
  console.error(" Database connection failed:", error);
}

export default db;
