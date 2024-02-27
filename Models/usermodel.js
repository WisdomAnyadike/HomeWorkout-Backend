const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{type:String , required:true  , unique: true , trim:true} , 
    email: {type:String , required:true  , unique: true } , 
    password: {type:String , required:true }
})

const userModel = mongoose.model('Usermodel' , userSchema)

module.exports = userModel
