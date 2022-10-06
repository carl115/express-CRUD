const { createPool } = require('mysql2/promise')

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'expresscrud'
})

module.exports = pool