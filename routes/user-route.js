const express = require('express')
const { Signup, Login, editPassword, editUserInfo, deleteAccount, sendOtp, changePassword } = require('../controllers/user-controller')
const VerifyToken = require('../middlewares/verifyToken')
const userRouter = express.Router()

userRouter.post('/signup' , Signup)
userRouter.post('/login' , Login)
userRouter.post('/editpassword', VerifyToken, editPassword)
userRouter.post('/edituserinfo', VerifyToken, editUserInfo)
userRouter.post('/deleteUser', VerifyToken , deleteAccount)
userRouter.post('/getOtp', sendOtp)
userRouter.post('/changePassword', changePassword)
module.exports = userRouter