const { Router } = require('express')
const pool = require('../database')

const router = Router()

router.get('/', async (req, res) => {    
    const title = 'Express CRUD'
    const titlePage = 'CRUD with Express and MySQL'

    res.render('index', { title, titlePage })
})

router.get('/products', async (req, res) => {
    const [product] = await pool.query('SELECT * FROM product')

    res.json(product)
})

module.exports = router