// Customer 구역

const express = require('express')
const router = express.Router()

router.post('/customer/signup')
router.post('/customer/login')
router.patch('/customer/profile/:customerId')

module.exprots = router;

