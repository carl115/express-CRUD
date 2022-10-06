const pool = require('../database.js')

const createProduct = async (req, res) => {
    const product_name = req.body.product_name
    const description = req.body.description
    
    const result = await pool.query(
        'INSERT INTO product(name, description) VALUES(?, ?)', [product_name, description]
    )

    res.redirect('/')
}

const editProduct = async (req, res) => {
    const id = req.body.id
    const product_name = req.body.product_name
    const description = req.body.description

    const result = await pool.query(
        `UPDATE product SET name = ?, description = ? WHERE id = ?`, [product_name, description, id]
    )

    res.redirect('/')
}

const deleteProduct = async (req, res) => {
    const id = req.query.id

    const result = await pool.query('DELETE FROM product WHERE id = ?', [id])

    res.redirect('/')
}

module.exports.createProduct = createProduct
module.exports.editProduct = editProduct
module.exports.deleteProduct = deleteProduct