const express = require('express')
const app = express()
const port = 3001

const customerRouter = require('./routes/customer.routes')
const supplierRouter = require('./routes/supplier.routes')
const laundryRouter = require('./routes/laundry.routes')
const reviewRouter = require('./routes/review.routes')


app.use(express.json())
app.use('/', [customerRouter, supplierRouter, laundryRouter, reviewRouter])


app.listen(port, () => {
    console.log(port, "포트 서버 오픈")
})