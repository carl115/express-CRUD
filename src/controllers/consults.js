import conn from '../db/db.js'

export const createProduct = async (req, res) => {
    const product_name = req.body.product_name
    const description = req.body.description
    
    const result = await conn.query('INSERT INTO product(name, description) VALUES(?, ?)', [product_name, description])

    res.redirect('http://localhost:3000')
}

export const editProduct = (req, res) => {
    res.redirect('http://localhost:3000')
}

export const deleteProduct = (req, res) => {
    const id = req.body.id

    console.log(id);

    res.sendStatus(204)
    /*
    const result = await conn.query('DELETE FROM product WHERE id = ?', [id])

    res.redirect('http://localhost:3000')
    */
}