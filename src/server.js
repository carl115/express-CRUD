import express from 'express'
import morgan from 'morgan'
const { pathname: root } = new URL('../src', import.meta.url)
import bodyParser from 'body-parser'

import conn from './db/db.js'

const app = express()

app.use(morgan('dev'))

app.set('view engine', 'ejs')
app.set('port', 3000)

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', async (req, res) => {
    const [product] = await conn.query(`SELECT * FROM product`)

    const title = 'Express CRUD'
    const titlePage = 'CRUD with Express and MySQL'

    res.render('index', { title, titlePage, product })
})

app.get('/editProduct', (req, res) => {
    res.redirect('http://localhost:3000')
})

app.post('/createProduct', urlencodedParser, async (req, res) => {
    console.log(req.body);
    //const result = await conn.query(`SELECT * FROM product`)
    //const result = await conn.query(`INSERT INTO product(name, description) VALUES("Fish", "Isabel")`)
    //const result = await conn.query(`DELETE FROM product WHERE id = 1`)
    //const result = await conn.query(`UPDATE product SET name = "xxxx", description = "xxxx" WHERE id = 2`)

    //res.redirect('http://localhost:3000')
    res.send('Product created')
})

app.use('/public', express.static(root + '/public'))

app.listen(app.get('port'))
console.log(`Server listen on port ${app.get('port')}`);