const express = require('express')
const router = express.Router()

router.post('/supplier/signup')
router.post('/supplier/login')
router.patch('/supplier/profile/:supplierId')

module.exports = router