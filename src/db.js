import { createPool } from "mysql2/promise";
import { DB_DATABASE, DB_USER, DB_PASSWROD, DB_HOST, DB_PORT } from "./config.js";

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWROD,
    port: DB_PORT,
    database: DB_DATABASE
})
