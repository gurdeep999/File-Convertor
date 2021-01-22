global.__basedir = __dirname;

const express = require('express')
const cors = require('cors')
const app = express()
const convertRouter = require('./controllers/convertRouter')
const { static } = require('express')
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(static(path.join(__dirname,'build')))

app.use('/api/convert',convertRouter)

app.use('*', (req,res) => res.sendFile(path.join(__dirname,'build','index.html')))

module.exports = app