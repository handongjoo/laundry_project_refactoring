const {Customer, Supplier, Laundry, Review} = require('../models')
const jwt = require('jsonwebtoken')
const {Op} = require('sequelize')

// Customer 회원가입
const customerSignup = async (req, res) => {
    try{
        const {nickname, email, password, confirm, cellphone} = req.body

        const customer = await Customer.findOne({
            where :
            {
                [Op.or] : [
                    {nickname, email}
                ]
            }
        })
        console.log(customer)
        if (password !== confirm) {
            res.status(400).json({message: "입력하신 비밀번호가 다릅니다."})
            return
        }
        if (customer) {
            res.status(400).json({message: "이미 존재하는 닉네임 혹은 이메일 입니다."})
            return
        }
        await Customer.create({nickname, email, password, cellphone})
        return res.status(200).json({message: "회원가입이 완료되었습니다."})
    } catch (error) {
        console.log(error)
    }
}

// Customer 로그인
const customerLogin = async (req, res) => {
    try {
        const {email, password} = req.body
        const customer = await Customer.findOne({where: {email}})
        console.log(customer)
        if (!customer) {
            res.status(400).json({message: "사용자가 없습니다."})
            return
        }
        if (customer.password !== password) {
            res.status(400).json({message: "비밀번호가 틀렸습니다."})
            return
        }
        const token = jwt.sign({customerId: customer.customerId}, 'customer-key', {expiresIn: '30m'})
        return res.status(200).json({message: "로그인 성공", token})
    } catch (error) {
        console.log(error)
    }
}

// Customer 프로필 수정
const customerUpdateProfile = async (req, res) => {
    try {
        const customerId = res.locals.customer.customerId
        const {nickname, email, cellphone} = req.body

        await Customer.update(
            {nickname, email, cellphone}, 
            {where: {customerId}}
        )
        return res.status(200).json({message: "수정이 완료되었습니다."})
    } catch (error) {
        console.log(error)        
    }
}

module.exports = {customerSignup, customerLogin, customerUpdateProfile}