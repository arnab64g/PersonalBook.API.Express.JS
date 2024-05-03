const jwt = require("jsonwebtoken");
require("dotenv").config()


const verifyToken = async (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (! bearerHeader) {
        res.status(401).send({});
    }
    else{
        const tookenlist = bearerHeader.split(" ");
        jwt.verify(tookenlist[1], process.env.SECRET_KEY, function(err, decoded) {
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
        jwt.verify(tookenlist[1], process.env.SECRET_KEY, function(err, decoded) {
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