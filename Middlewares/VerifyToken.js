const jwt = require('jsonwebtoken')

const verifyToken = async(req, res , next) => { 
    let secretKey = process.env.JWT_SECRET;
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader) {
      res.status(400).send({ message: "authorization not provided" });
    } else {
      if (!authHeader.startsWith("Bearer")) {
        res.status(400).send({ message: "invalid authorization format" });
      } else {
        const token = authHeader.split(" ")[1];
       console.log(authHeader);
        jwt.verify(token, secretKey, (err, decode) => {
          if (err) {
            res.status(400).send({ message: "Error Verifying Token" });
          } else {
            console.log("recieved Details : ", decode.user);
            req.user = decode.user;
            next();
          }
        });
      }
    }
}

module.exports = verifyToken