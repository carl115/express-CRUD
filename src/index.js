import express from 'express'
import morgan from 'morgan'
const { pathname: root } = new URL('../src', import.meta.url)

import conn from './db/db.js'

const app = express()

app.use(morgan('dev'))

app.set('port', 3000)

app.get('/', async (req, res) => {
    const [result] = await conn.query(`SELECT * FROM product`)

    res.json(result)
})

app.use('/public', express.static(root + '/public'))

app.listen(app.get('port'))
console.log(`Server listen on port ${app.get('port')}`);