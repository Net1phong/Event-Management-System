import { createPool } from "mysql2";

export const mysqlPool = createPool(process.env.MYSQL_URI);
