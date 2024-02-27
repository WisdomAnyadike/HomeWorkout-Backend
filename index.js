const express = require('express')
const ConnectDb = require('./Config/Dbconfig')
const app = express()
const env = require('dotenv').config()
const cors = require('cors')
const userRouter = require('./Routes/userroutes')

app.use(express.json())
app.use(cors({origin: "*"}))
app.use('/Api/user' , userRouter)

const port = 2345





ConnectDb()
app.listen(port , ()=> {
    console.log(`we are running on http://localhost:${port}`);
})