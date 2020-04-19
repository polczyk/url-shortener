const {Pool} = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || process.env.DATABASE_URL_DEV,
  ssl: true
})

module.exports = pool
