const { Router } = require('express')
const index = require('./index.routes')
const edit = require('./edit.routes')
const consults = require('./consults.routes')

const router = Router()

router.use(index)
router.use(edit)
router.use(consults)

module.exports = router