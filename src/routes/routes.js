import { Router } from 'express'

import index from './index.routes.js'
import consults from './consults.routes.js'

let router = Router()

router.use(index)
router.use(consults)

export default router