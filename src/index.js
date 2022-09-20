const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.use(morgan('dev'))

app.set('port', 3000)

app.get('/', (req, res) => {
    res.send('HELLO')
})

app.use('/public', express.static(path.join(__dirname, '/public')))

app.listen(app.get('port'))
console.log(`Server listen on port ${app.get('port')}`);