const nodemailer = require('nodemailer')

const SendSignupMssg = async( userName , email)=> {
    const messageTemplate = ` `

    const trasporter = nodemailer.createTransport({
        service: ['Gmail' , 'outlook' , 'icloud' , 'yahoo' ],
        auth: {
            user: '' ,
            pass: ''
        }
    })
    
    const mailOptions = {
        from: '', 
        to : email ,
        subject: 'Welcome to ',
        html : messageTemplate, 
        text: `Hello ${userName}`
    }
    
    try {
        trasporter.sendMail(mailOptions)
        console.log('Email sent successfully');
        
    } catch (error) {
        console.log('Email couldnt send unfortunately' , error);
    }
    
    

}


const sendUserOtp = async( Otp , userName , email)=> {
    const messageTemplate = `<div>
    <div>
      <h2 style="color: red;"> Reset Your Password </h2>
    </div>
    <ul>
      <li>Name: ${userName}</li>
      <li>Email: ${email}</li>
    </ul>
    <div>
      <p>
        Dear ${userName},
      </p>
      <p>
      Hello,
   
      </p>
      <p>
      We have sent you this email in response to your request to reset your password on company name.
      </p>
      <p>     
      To reset your password, Your OTP is : ${Otp}
      </p>
    </div>
    <p style="color: black;"><i>  </i></p>
   </div>
   `
   
   const trasporter = nodemailer.createTransport({
       service: ['Gmail' , 'outlook' , 'icloud' , 'yahoo' ],
       auth: {
           user: '',
           pass:''
       }
   })
   
   const mailOptions = {
       from: '' , 
       to : email ,
       subject: 'Reset Your Password',
       html : messageTemplate, 
       text: `Hello ${userName}`
   }
   
   try {
       trasporter.sendMail(mailOptions)
       console.log('Email sent successfully');
       
   } catch (error) {
       console.log('Email couldnt send unfortunately' , error);
   }
   
   
   
   
   }
   
   module.exports = {SendSignupMssg , sendUserOtp}