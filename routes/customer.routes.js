// Customer 구역

const express = require('express')
const router = express.Router()

const customerController = require('../controller/customer.controller')
const customerMiddleware = require('../middlewares/customer-middleware')

router.post('/customer/signup', customerController.customerSignup)
router.post('/customer/login', customerController.customerLogin)
router.patch('/customer/profile/:customerId', customerMiddleware, customerController.customerUpdateProfile)

module.exports = router

