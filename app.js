const express = require('express')
const app = express()
const port = 3001

app.listen(port, () => {
    console.log(port, "포트 서버 오픈")
})