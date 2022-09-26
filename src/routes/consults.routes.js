import { Router } from 'express'
import { createProduct, editProduct, deleteProduct } from '../controllers/consults.js'
import bodyParser from 'body-parser'

let router = Router()

let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/create-product', urlencodedParser, createProduct)
router.get('/edit-product', editProduct)
router.get('/delete-product', deleteProduct)

export default router