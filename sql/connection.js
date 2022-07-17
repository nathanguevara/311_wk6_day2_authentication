require("dotenv").config();
const mysql = require("mysql");

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DEFAULT_SCHEMA } = process.env;

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating mysql connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DEFAULT_SCHEMA,
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;