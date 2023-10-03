const resultRepository = require("../repository/resultRepository");

const addResultAsync = async (result) => {
    return await resultRepository.addResultAsync(result);
}

module.exports = { 
    addResultAsync
}