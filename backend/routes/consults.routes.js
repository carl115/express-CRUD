const { Router } = require('express')
const { createProduct, editProduct, deleteProduct } = require('../controllers/consults')

const router = Router()

router.post('/create-product', createProduct)
router.post('/edit', editProduct)
router.get('/delete-product', deleteProduct)

module.exports = router