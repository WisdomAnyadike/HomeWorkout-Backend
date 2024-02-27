const express = require('express')
const { Signup, Login, editPassword, editUserInfo, deleteAccount, sendOtp, changePassword } = require('../Controllers/Usercontroller')
const VerifyToken = require('../Middlewares/VerifyToken')
const userRouter = express.Router()

userRouter.post('/signup' , Signup)
userRouter.post('/login' , Login)
userRouter.post('/editpassword' , VerifyToken  , editPassword)
userRouter.post('/edituserinfo' , VerifyToken  , editUserInfo)
Router.post('/deleteUser' , VerifyToken , deleteAccount)
Router.post('/getOtp' ,  sendOtp)
Router.post('/changePassword' ,  changePassword)
module.exports = userRouter