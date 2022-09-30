import { Router } from 'express'
import { createProduct, editProduct, deleteProduct } from '../controllers/consults.js'
import bodyParser from 'body-parser'

let router = Router()

let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/create-product', urlencodedParser, createProduct)
router.get('/edit/:id', editProduct)
router.post('/delete-product', urlencodedParser, deleteProduct)

export default router