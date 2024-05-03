const userService = require("../services/userService");

async function createUserAsync(req) {
    res = await userService.createUserAsync(req);

    return res;
}

async function loginUserAsync(param) {
    return userService.loginUserAsync(param);
}

async function getProfileAsync(req) {
    return userService.getProfileAsync(req);
}

module.exports = {
    createUserAsync,
    loginUserAsync,
    getProfileAsync
}