const express = require('express')
const router = express.Router()

// Customer 영역
// 세탁물 신청
router.post('/laundry/apply')
// 세탁물 취소
router.post('/laundry/cancel/:laundryId')
// 내가 신청한 세탁물 조회
router.get('/laundry/list/:customerId')

// Supplier 영역
// 고객이 신청한 세탁물 목록 조회
router.get('/laundry/applylist')
// 신청한 세탁물 상세 조회
router.get('/laundry/applylist/:laundryId')
// 세탁물 수거 신청 (status 변경)
router.patch('/laudnry/catch/:laundryId')
// 내가 수거 신청한 세탁물 목록 조회
router.get('/laundry/catchlist/:supplierId')
// 진행중인 세탁물 상태 변경
router.patch('/laundry/catchlist/:supplierId/:laundryId')

module.exports = router