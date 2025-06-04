require("dotenv").config();
const mssql = require("mssql");
const { logError } = require("./logger.utils");

let pool = null;

async function getPool() {
  if (!pool) {
    try {
      const mssqlConfig = {
        user: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD,
        server: process.env.SERVER,
        port: 1433,
        database: process.env.DB_NAME,
        trustServerCertificate: true,
        requestTimeout: 15000,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000,
        },
      };

      pool = await new mssql.ConnectionPool(mssqlConfig).connect();
      console.log('Connected');
      
    } catch (err) {
      logError("Failed to connect to MSSQL", err);
      throw err;
    }
  }
  return pool;
}

module.exports = getPool;
