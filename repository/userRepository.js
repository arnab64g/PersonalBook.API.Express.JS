const crypto = require("crypto");
const db = require("../database/dbconnect");
const { Op } = require("sequelize");
const user = db.User;

async function isUsernameExistAsync(uname) {
    return await user.count({
        where : {username : uname}
    });
}

async function isEmailExistAsync(email) {
    return await user.count({
        where : {email : email }
    });
}

async function isPhoneExistAsync(phone) {
    return await user.count({
        where : {phoneNumber : phone }
    });
}

async function createUserAsync(userData) {
    return await user.create({
        id : crypto.randomUUID(),
        firstName : userData.firstName,
        lastName : userData.lastName,
        email : userData.email,
        username : userData.username,
        phoneNumber : userData.phoneNumber,
        role : "Admin",
        token : "",
        created: new Date(),
        password : userData.password,
        address : userData.address
    });
}

async function getUserAsync(key) {
    return await user.findOne({
        where : { 
            [Op.or] : [{username : key}, {email : key }, {phoneNumber : key}]}
    });
}

async function getProfileAsync(id) {
    return await user.findOne({
        where : {
            id : id
        }
    });
}

module.exports = { 
    isUsernameExistAsync,
    isEmailExistAsync,
    isPhoneExistAsync,
    createUserAsync,
    getUserAsync,
    getProfileAsync
}