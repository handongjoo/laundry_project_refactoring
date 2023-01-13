const {Customer, Supplier, Laundry, Review} = require('../models')
const jwt = require('jsonwebtoken')
const {Op} = require('sequelize')

// Supplier 회원가입
const supplierSignup = async (req, res) => {
    try{
        const {nickname, email, password, confirm, cellphone} = req.body

        const supplier = await Supplier.findOne({
            where :
            {
                [Op.or] : [
                    {nickname, email}
                ]
            }
        })
        console.log(supplier)
        if (password !== confirm) {
            res.status(400).json({message: "입력하신 비밀번호가 다릅니다."})
            return
        }
        if (supplier) {
            res.status(400).json({message: "이미 존재하는 닉네임 혹은 이메일 입니다."})
            return
        }
        await Supplier.create({nickname, email, password, cellphone})
        return res.status(200).json({message: "회원가입이 완료되었습니다."})
    } catch (error) {
        console.log(error)
    }
}

// Supplier 로그인
const supplierLogin = async (req, res) => {
    try {
        const {email, password} = req.body
        const supplier = await Supplier.findOne({where: {email}})
        console.log(supplier)
        if (!supplier) {
            res.status(400).json({message: "사용자가 없습니다."})
            return
        }
        if (supplier.password !== password) {
            res.status(400).json({message: "비밀번호가 틀렸습니다."})
            return
        }
        const token = jwt.sign({supplierId: supplier.supplierId}, 'supplier-key', {expiresIn: '30m'})
        return res.status(200).json({message: "로그인 성공", token})
    } catch (error) {
        console.log(error)
    }
}

// Supplier 프로필 수정
const supplierUpdateProfile = async (req, res) => {
    try {
        const supplierId = res.locals.supplier.supplierId
        const {nickname, email, cellphone} = req.body

        await Supplier.update(
            {nickname, email, cellphone}, 
            {where: {supplierId}}
        )
        return res.status(200).json({message: "수정이 완료되었습니다."})
    } catch (error) {
        console.log(error)        
    }
}

module.exports = {supplierSignup, supplierLogin, supplierUpdateProfile}