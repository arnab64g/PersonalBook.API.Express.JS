const resultService = require("../services/resultService");

const addResultAsync = async (result) => {
    return await resultService.addResultAsync(result)
} 

const getResultsAsync = async (userId) => {
    return await resultService.getResultsAsync(userId);
}

module.exports = { 
    addResultAsync,
    getResultsAsync
}