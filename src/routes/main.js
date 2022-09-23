import { Router } from 'express'
import bodyParser from 'body-parser'

import conn from '../db/db.js'

let router = Router()

let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', async (req, res) => {
    const [product] = await conn.query(`SELECT * FROM product`)
    
    const title = 'Express CRUD'
    const titlePage = 'CRUD with Express and MySQL'
    
    res.render('index', { title, titlePage, product })
})
    
router.get('/editProduct', (req, res) => {
    res.redirect('http://localhost:3000')
})

router.post('/createProduct', urlencodedParser, async (req, res) => {
    const product_name = req.body.product_name
    const description = req.body.description
    
    const result = await conn.query('INSERT INTO product(name, description) VALUES(?, ?)', [product_name, description])

    res.redirect('http://localhost:3000')
})

router.get('/deleteProduct', async (req, res) => {
    const id = req.query.id

    const result = await conn.query('DELETE FROM product WHERE id = ?', [id])

    res.redirect('http://localhost:3000')
})

export default router