const mongoose = require('mongoose')

const ConnectDb = async () => {
  const connectString = process.env.CONNECTION_STRING
  try {
    const connecter = await mongoose.connect(connectString)
    if (connecter) {
      console.log('Database connected successfully');
      console.log("  ▀▄   ▄▀");
      console.log(" ▄█▀███▀█▄");
      console.log("█▀███████▀█");
      console.log("█ █▀▀▀▀▀█ █");
      console.log("   ▀▀ ▀▀");
      console.log("Hello Adventurer, fitness api is live !!!!");
    } else {
      console.log('Couldnt connect to database, connectString missing');
    }


  } catch (error) {
    console.log('database network error', error);
  }




}

module.exports = ConnectDb

