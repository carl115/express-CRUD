import { Router } from 'express'

let router = Router()

router.get('/', async (req, res) => {
    /*
    const [product] = await conn.query(`SELECT * FROM product`)
    
    const title = 'Express CRUD'
    const titlePage = 'CRUD with Express and MySQL'

    console.log(product);
    
    res.render('index', { title, titlePage, product })
    */
    res.send('Index')
})

export default router