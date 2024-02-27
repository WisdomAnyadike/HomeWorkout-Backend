const mongoose = require('mongoose')

const ConnectDb = async() => {
 const connectString = process.env.CONNECTION_STRING
 try {
    const connecter = await mongoose.connect(connectString)
    if (connecter){
      console.log('Database connected successfully');
    }else{
      console.log('Couldnt connect to database');
    }
    
    
 } catch (error) {
    console.log('database network error', error);
 }




}

module.exports = ConnectDb

