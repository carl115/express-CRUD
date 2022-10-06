const { Router } = require('express')
const pool = require('../database.js')

const router = Router()

router.get('/edit-product', async (req, res) => {
    const id = req.query.id

    const [product] = await pool.query('SELECT * FROM product WHERE id = ?', [id])

    const title = 'Edit product'
    const titlePage = 'CRUD with Express and MySQL'

    res.render('editProduct', { title, titlePage, product })
})

module.exports = router