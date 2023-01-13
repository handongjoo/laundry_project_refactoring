const express = require('express')
const router = express.Router()
const customerMiddleware = require('../middlewares/customer-middleware')
const supplierMiddleware = require('../middlewares/supplier-middleware')

//Supplier 리뷰 조회
router.get('/review/:supplierId')
//리뷰 작성
router.post('/review/:supplierId')
//리뷰 수정
router.patch('/review/:supplierId')
//리뷰 삭제
router.delete('/review/:supplier')

module.exports = router