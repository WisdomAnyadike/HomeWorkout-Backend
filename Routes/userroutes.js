const express = require('express')
const { Signup } = require('../Controllers/Usercontroller')
const userRouter = express.Router()

userRouter.post('/signup' , Signup)


module.exports = userRouter