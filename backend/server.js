const express = require('express')
const morgan = require('morgan')
const path = require('path')

const routes = require('../backend/routes/routes')

const app = express()

//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//

//SETTINGS
app.set('view engine', 'ejs')
app.set('port', 3000)
//

//VIEWS
app.use(routes)
//

//PUBLIC FILES
app.use(express.static(path.join(__dirname, 'public')))
//

//PAGE NOT FOUND
app.use((req, res, next) => res.status(404).send('Page not found'))
//

//START SERVER
app.listen(app.get('port'), () => console.log('Server listening...'))
//