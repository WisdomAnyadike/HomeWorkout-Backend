const express = require('express')
const ConnectDb = require('./config/Dbconfig')
const app = express()
require('dotenv').config()
const cors = require('cors')
const userRouter = require('./routes/user-route')

app.use(express.json())
app.use(cors({origin: "*"}))
app.use('/Api/user' , userRouter)

const port = process.env.PORT





ConnectDb()
app.listen(port , ()=> {
    console.log(`we are running on http://localhost:${port}`);
})