import { Router } from 'express'
import bodyParser from 'body-parser'

import conn from '../../db/db.js'

let router = Router()

let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/createProduct', urlencodedParser, async (req, res) => {
    const product_name = req.body.product_name
    const description = req.body.description
    
    const result = await conn.query('INSERT INTO product(name, description) VALUES(?, ?)', [product_name, description])

    res.redirect('http://localhost:3000')
})

export default router