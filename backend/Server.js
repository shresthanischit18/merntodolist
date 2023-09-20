const express = require('express')
const mongoose = require ('mongoose')
const cors = require('cors')

const routes = require('./routes/Todoroute')
const morgan = require("morgan")
// create "middleware"
var logger = morgan('dev')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 8000

app.use(express.json())
app.use(logger)
app.use(cors())


mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected to MongoDB`))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
