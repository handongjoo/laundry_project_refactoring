const jwt = require('jsonwebtoken')
const {Customer} = require('../models')

module.exports = async (req, res, next) => {

    const {authorization} = req.headers
    const token = authorization.split(' ')[1]
    
    if (!token) {
        res.status(401).json({message: "로그인 후 사용 가능합니다."})
    }
    
    try {
        const {customerId} = jwt.verify(token, "customer-key")
        const customer = await Customer.findByPk(customerId)
        res.locals.customer = customer
        next()
    } catch (error) {
        console.log(error)
    }
}