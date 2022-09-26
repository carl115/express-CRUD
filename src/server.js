import express from 'express'
import morgan from 'morgan'
//const { pathname: root } = new URL('../src', import.meta.url)

import routes from './routes/routes.js'

const app = express()

app.use(morgan('dev'))

//SETTINGS
app.set('view engine', 'ejs')
app.set('port', 3000)

//VIEWS
app.use(routes)
//

//Consults
//const result = await conn.query(`INSERT INTO product(name, description) VALUES("Fish", "Isabel")`)
//const result = await conn.query(`SELECT * FROM product`)
//const result = await conn.query(`INSERT INTO product(name, description) VALUES("Fish", "Isabel")`)
//const result = await conn.query(`DELETE FROM product WHERE id = 1`)
//const result = await conn.query(`UPDATE product SET name = "xxxx", description = "xxxx" WHERE id = 2`)

app.use((req, res, next) => res.status(404).send('Page not found'))

app.listen(app.get('port'))
console.log(`Server listen on port ${app.get('port')}`);