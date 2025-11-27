import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

export const db = new pg.Client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect()
  .then(() => console.log("Connected to PostgreSQL 🔥"))
  .catch(err => console.log("DB Connection Failed ❌", err));

