const { sendUserOtp, SendSignupMssg } = require("../config/Mailer")
const userModel = require("../models/usermodel")
const bcrypt = require('bcryptjs')


let genRandomNum = ()=> {
    let six = ''

    for (let index = 0; index < 6; index++) {
        let randomNum = Math.floor(Math.random() * 10)
        six += randomNum  
      
  }
  return six
   } 


const Signup = async(req,res) => {
const {userName , email , password} = req.body
if (!userName || !email || !password){
    res.status(400).send({message:"all fields are mandatory" })
}else{
    try {
        const validateEmail = await userModel.findOne({email})
        if (validateEmail) {
            res.status(400).send({message:"email already in use" })     
        }{
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
        SendSignupMssg( userName , createUser.email)
        console.log('created user:', createUser );
     }

            
        }



        
    } catch (error) {
        res.status(500).send({message: 'Internal server error' })  
        console.log('Network error' , error);
       
    }




}



}


const Login = async(req,res) => {
  const {email , password} = req.body
  if( !email || !password){
    res.status(400).send({message:"All fields are mandatory"})
  }else{
    try {
        const userDetails  = await userModel.findOne({email})
        if(!userDetails){
            res.status(400).send({message:"User doesnt exist, try creating an account"})
        }else{
            const comparePassword = await bcrypt.compare(
                password,
                userDetails.password
            );
            const secretKey = process.env.JWT_SECRET;

            const genToken = await jwt.sign(
                {
                    user: {
                        userName: userDetails.userName,
                        email: userDetails.email,
                    },
                },
                secretKey,
                { expiresIn: "1d" }
            );
   if (!comparePassword) {
    res.status(400).send({message:"Incorrect Password"})
   }else{
    res.status(200).send({message:"Login Successful"})
   }
  
        }
        
    } catch (error) {
        res.status(500).send({message: 'Internal server error' })  
        console.log('Network error' , error);
    }
  }

}


const editPassword = async(req, res)=> {
    const user = req.user
    const{userName , email} = user
    
    if (!user) {
        res.status(400).send({message:"Authentication not provided"})
    }else{
        const {password} = req.body
        if(!password){
            res.status(400).send({message:"Password Field is mandatory"})
        }else{
            try {  
                const hashedPassword = await bcrypt.hash(password , 10)   
             const foundUser = await userModel.findOneAndUpdate({email} , {
                        userName, 
                        email,
                        password: hashedPassword
                    } , { new: true})
        if (!foundUser) {
            res.status(400).send({message:"Couldnt update password"}) 
        }else {
            res.status(200).send({message:"Password successfully updated" , status:"okay"})
        }
                  
            } catch (error) {
                res.status(400).send({message:"Internal server error"})
            }
        }
       
    }
    
    
    
    }
    
    const editUserInfo = async(req, res)=> {
        const user = req.user
    
        if (!user) {
            res.status(400).send({message:"Authentication not provided"})
        }else{
            const {userName , email} = req.body
           const validateEmail = await userModel.findOne({email})
         
            if(!userName || !email){
                res.status(400).send({message:"All Fields is mandatory"})
            } else if( userName == user.userName && email == user.email){
                res.status(400).send({message:"Update at least one field to continue"})
            }
            else if (validateEmail && (validateEmail.email !== user.email)) {
                res.status(400).send({message:"This Email is already in use by another customer"})
               }
        
            else{
                try {    
                 const foundUser = await userModel.findOneAndUpdate({email:user.email} , {
                            userName, 
                            email,
                        } , { new: true})
            if (!foundUser) {
                res.status(400).send({message:"Couldnt update user information"}) 
            }else {
                res.status(200).send({message:"User information successfully updated" , status:"okay"})
                console.log("updated userinfo:" , {
                    userName, 
                    email,
                } );
            }              
                } catch (error) {
                    console.log(error);
                    res.status(400).send({message:"Internal server error"})
                }
            }
           
        }
        
        
        
        }
    
    
        const deleteAccount = async(req,res)=> {
            const user = req.user
            if(!user){
                res.status(400).send({message:"Authentication not provided"})
            }else{
                try {
                    const userToDelete = await userModel.findOneAndDelete({email:user.email})
                    if(!userToDelete){
                        res.status(400).send({message:"Unable to delete user at the moment" , status:"false"})
                    }else{
                        res.status(200).send({message:"User successfully deleted" , status:"okay"})
                        console.log('deleted user', userToDelete);
                    }
                    
                } catch (error) {
                    res.status(500).send({message:"internal server error" })
                    console.log(error);
                }
            }
        }
    
        let theEmail
    
        const sendOtp = async(req,res)=> {
            const {email} = req.body
            theEmail = email
            if (!email){
                res.status(400).send({message:"email is mandatory"})
            }else{
                try {
               const  validateEmail = await userModel.findOne({email})
                if(!validateEmail){
                    res.status(400).send({message:"User doesnt exist"})  
                }else{
                    let userOtp = genRandomNum()
                sendUserOtp( userOtp , validateEmail.userName , email )
                res.status(200).send({message:"OTP has been sent Successfully" , status:"okay" ,  userOtp }) 
                }
                 
                } catch (error) {
                    res.status(500).send({message:"internal server error"})  
                    console.log(error);
                }
            }
    
    
        }
    
        const changePassword = async(req , res) => {
              const {password} = req.body
              if(!password){
                res.status(400).send({message:"password is mandatory"})
              }else{
                try {
                    const hashedPassword = await bcrypt.hash(password , 10)
                    const checkEmail = await userModel.findOneAndUpdate({email:theEmail} , {
                        password: hashedPassword
                    } , {new:true})
                    if(!checkEmail){
                        res.status(400).send({message:"Password Failed to Update"})    
                    }else {
                        res.status(200).send({message:"Password successfully updated" , status:"okay"})    
                    }
                } catch (error) {
                    res.status(500).send({message:"internal server error"})  
                    console.log(error); 
                }
              }
    
        }
    






module.exports = {Signup , Login  , editPassword , editUserInfo , deleteAccount , sendOtp , changePassword}