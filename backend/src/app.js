// server should be created in app.js file

const express = require('express')

const songRoutes = require('./routes/song.routes')
const cors = require('cors')

const app = express()
app.use(cors()) //middleware to connect backend with frontend that are running on the different origins
app.use(express.json())

app.use('/',songRoutes)


module.exports = app