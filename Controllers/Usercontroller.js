const userModel = require("../Models/usermodel")
const bcrypt = require('bcrypt')


const Signup = async(req,res) => {
const {userName , email , password} = req.body
if (!userName || !email || !password){
    res.status(400).send({message:"all fields are mandatory" })
}else{
    try {

   const hashedpassword = await  bcrypt.hash(password , 10 )
        const createUser = await userModel.create({
            userName ,
            email,
            password: hashedpassword
        })
 if (!createUser) {
    res.status(400).send({message: 'unable to sign up, try again later' , status: 'false'})
    
 }else{
    res.status(200).send({message: `Account successfully created for ${userName} ` , status: 'success'})
    console.log('created user:', createUser );
 }

        
    } catch (error) {
        res.status(500).send({message: 'Internal server error' })  
        console.log('Network error' , error);
       
    }




}



}


module.exports = {Signup}