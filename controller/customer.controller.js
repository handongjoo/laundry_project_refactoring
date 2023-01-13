const {Customer, Supplier, Laundry, Review} = require('../models')
const {Op} = require('sequelize')

// 회원가입

const signUp = async (req, res) => {
    try{
        const {nickname, email, password, confirm, cellphone} = req.body

        const customer = await Customer.findAll({
            where : {
                [Op.or]: [{nickname, email}]
            }
        })
        console.log(customer)
        if (password !== confirm) {
            res.status(400).json({message: "입력하신 비밀번호가 다릅니다."})
            return
        }
        if (customer.nickname === nickname) {
            res.status(400).json({message: "이미 존재하는 닉네임 입니다."})
            return
        }
        if (customer.email === email) {
            res.status(400).json({message: "이미 존재하는 이메일 입니다."})
            return
        }
        await Customer.create({nickname, email, password, cellphone})
        return res.status(200).json({message: "회원가입이 완료되었습니다."})
    } catch (error) {
        console.log(error)
    }
}

// const customerLogin = async (req, res) => {
//     try{
//         const {email, password} = req.body
        
//     }
// }

module.exports = {signUp}