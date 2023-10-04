const resultRepository = require("../repository/resultRepository");

const addResultAsync = async (result) => {
    return await resultRepository.addResultAsync(result);
}

const getResultsAsync = async (userId) =>{
    return await resultRepository.getResultsAsync(userId);
} 

module.exports = { 
    addResultAsync,
    getResultsAsync
}