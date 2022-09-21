import { createConnection } from 'mysql2/promise'

const conn = await createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'expresscrud'
})

export default conn