import { Router } from 'express'
import conn from '../db/db.js'

let router = Router()

router.get('/', async (req, res) => {
    const [product] = await conn.query(`SELECT * FROM product`)

    const edit = (number) => console.log(number)
    
    const title = 'Express CRUD'
    const titlePage = 'CRUD with Express and MySQL'

    res.render('index', { title, titlePage, product })
})

export default router