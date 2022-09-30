import { Router } from 'express'

let router = Router()

router.get('/edit-product', (req, res) => {
    const title = 'Edit product'
    const titlePage = 'CRUD with Express and MySQL'

    res.render('editProduct', { title, titlePage })
})

export default router