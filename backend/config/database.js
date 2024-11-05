import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  decimalNumbers: true,
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Export the pool for use in other modules
export default pool;