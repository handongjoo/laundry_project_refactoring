const {Customer, Supplier, Laundry, Review} = require('../models')

// Customer 세탁물 신청
const applyLaundry = async (req, res) => {
    try {
        const {picture, request, address, cellphone} = req.body
        const customerId = res.locals.customer.customerId
    
        if (!picture || !request || !address || !cellphone) {
            res.status(400).json({message: "모든 항목을 작성해 주세요."})
            return
        }
        await Laundry.create({customerId, picture, request, cellphone, address})
        return res.status(200).json({message: "세탁물 신청이 완료되었습니다."})
    } catch (error) {
        console.log(error)
    }
}

// Custoemr 세탁물 취소
const cancelLaundry = async (req, res) => {
    try{
        const {laundryId} = req.params
        
        if (!laundryId) {
            res.status(400).json({message: "세탁물이 존재하지 않습니다."})
            return
        }
        await Laundry.destroy({where: {laundryId}})
        return res.status(200).json({message: "세탁물이 취소되었습니다."})
    } catch (error) {
        console.log(error)
    }
}

// 내가 신청한 세탁물 조회
const getMyLaundrys = async (req, res) => {
    try {
        const customerId = req.params
        const laundrys = await Laundry.findAll({where: {customerId}})
    
        res.status(200).json({laundrys})
    } catch (error) {
        console.log(error)
    }
}
module.exports = {applyLaundry, cancelLaundry, getMyLaundrys}