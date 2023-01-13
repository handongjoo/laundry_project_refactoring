// Customer 구역

const express = require('express')
const router = express.Router()

const customerController = require('../controller/customer.controller')

router.post('/customer/signup', customerController.signUp)
router.post('/customer/login')
router.patch('/customer/profile/:customerId')

module.exports = router

