const express = require('express')
const app = express()
const errorHandler = require('./errors/errorHandler')
const notFound = require('./errors/notFound')
const testRouter = require('./components/TestRoute/test.router')

app.use(express.json())

app.use("/test", testRouter)
app.use(notFound)
app.use(errorHandler)

module.exports = app
