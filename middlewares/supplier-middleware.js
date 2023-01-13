const jwt = require('jsonwebtoken')
const {Supplier} = require('../models')

module.exports = async (req, res, next) => {

    const {authorization} = req.headers
    const token = authorization.split(' ')[1]
    
    if (!token) {
        res.status(401).json({message: "로그인 후 사용 가능합니다."})
    }
    
    try {
        const {supplierId} = jwt.verify(token, "supplier-key")
        const supplier = await Supplier.findByPk(supplierId)
        res.locals.supplier = supplier
        next()
    } catch (error) {
        console.log(error)
    }
}