const express = require('express')
const app = express()
var cors = require('cors')
const path = require("path")
const PORT = process.env.PORT || 3000
require('./mongoose')
app.use(cors({
  origin:true,
  credentials:true
}))


app.use(express.json())

const reserveRouter = require('./routes/reservation')
app.use(reserveRouter.router);



app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`)
})

module.exports = app