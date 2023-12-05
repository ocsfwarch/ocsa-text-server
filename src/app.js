const express = require('express')
const cors = require('cors')
const app = express()
const errorHandler = require('./errors/errorHandler')
const notFound = require('./errors/notFound')
const testRouter = require('./components/TestRoute/test.router')
const textRouter = require('./components/TextCard/textCard.router')

app.use(cors())
app.use(express.json())

app.use("/test", testRouter)
app.use("/textcard", textRouter)
app.use(notFound)
app.use(errorHandler)

module.exports = app
