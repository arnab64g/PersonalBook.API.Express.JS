const SECRET_KEY = "123secretkey";
const jwt = require("jsonwebtoken");
const env = require("dotenv").config()


const verifyToken = async (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (! bearerHeader) {
        res.status(401).send({});
    }
    else{
        const tookenlist = bearerHeader.split(" ");
        console.log(typeof tookenlist[1]);
        jwt.verify(tookenlist[1], SECRET_KEY, function(err, decoded) {
            if (err) {
              res.status(404).send({msg : "Invalid"})
            }
            else{
                next();
            }
          });
    }
}

const verifyAdmin = async (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (! bearerHeader) {
        
        res.status(401).send({});
    }
    else{
        const tookenlist = bearerHeader.split(" ");
        console.log(typeof tookenlist[1]);
        jwt.verify(tookenlist[1], SECRET_KEY, function(err, decoded) {
            if (err) {
              res.status(404).send({msg : "Invalid"})
            }
            else if (decoded.role == "Admin") {
                next();
            }
            else{
                res.status(401).send({msg : "Not an Admin"})
            }
          });
    }
}

module.exports = {
    verifyToken,
    verifyAdmin
} 