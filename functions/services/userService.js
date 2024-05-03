const userRepository = require("../repository/userRepository");
const errors = require("../models/error");
const bycript = require("bcrypt");
const SECRET_KEY = "123secretkey";
const jwt = require("jsonwebtoken");

async function createUserAsync(req) {
    let result = {
        successed : 0,
        errors : []
    }

    if (await  userRepository.isUsernameExistAsync(req.username)) {
        result.errors.push(errors.userNameExist);
    } 

    if (await userRepository.isEmailExistAsync(req.email)) {
        result.errors.push(errors.emailExist)
    }

    if (await userRepository.isPhoneExistAsync(req.phoneNumber)) {
        result.errors.push(errors.phoneNumberExist)
    }

    if (result.errors.length > 0) {
        res = result;
    }
    else{
        const salt = await bycript.genSalt(10);
        req.password =  await bycript.hash(req.password, salt);
        const res = await userRepository.createUserAsync(req);
        result.successed = res;
    }

    return result;
}

async function loginUserAsync(param) {
    let result = { 
        successed : 0,
        message : "",
        token : ""
    };
    const user = await userRepository.getUserAsync(param.username);
    
    if (!user) {
        result.message = errors.userNotExist;
    }
    else{
        const match = await bycript.compare(param.password, user.password);
        if (!match) {
            result.message = errors.invalidPassword;
        }
        else{
            result.successed = true;

            result.token = jwt.sign({role : user.role, unique_name : user.id, actort : `${user.firstName} ${user.lastName}`}, SECRET_KEY);
        }
    }
    
    return result;
}

async function getProfileAsync(id) {
    return await userRepository.getProfileAsync(id);
}

module.exports = {
    createUserAsync,
    loginUserAsync,
    getProfileAsync
}

