const express = require('express')
const router = express.Router()

const laundryController = require('../controller/laundry.controller')
const customerMiddleware = require('../middlewares/customer-middleware')
const supplierMiddleware = require('../middlewares/supplier-middleware')
// Customer 영역
// 세탁물 신청
router.post('/laundry/apply', customerMiddleware, laundryController.applyLaundry )
// 세탁물 취소
router.delete('/laundry/cancel/:laundryId', customerMiddleware, laundryController.cancelLaundry)
// 내가 신청한 세탁물 조회
router.get('/laundry/list/:customerId', customerMiddleware, laundryController.getMyLaundrys)

// Supplier 영역
// 고객이 신청한(수거 안한) 세탁물 목록 조회
router.get('/laundry/applylist', supplierMiddleware, laundryController.getCustomerApplyList)
// 신청한 세탁물 상세 조회
router.get('/laundry/applylist/:laundryId')
// 세탁물 수거 신청 (status 변경)
router.patch('/laudnry/catch/:laundryId')
// 내가 수거 신청한 세탁물 목록 조회
router.get('/laundry/catchlist/:supplierId')
// 진행중인 세탁물 상태 변경
router.patch('/laundry/catchlist/:supplierId/:laundryId')

module.exports = router