const express = require('express')
const router = express.Router()

const supplierController = require('../controller/supplier.controller')
const supplierMiddleware = require('../middlewares/supplier-middleware')

router.post('/supplier/signup', supplierController.supplierSignup)
router.post('/supplier/login', supplierController.supplierLogin)
router.patch('/supplier/profile/:supplierId', supplierMiddleware, supplierController.supplierUpdateProfile)

module.exports = router