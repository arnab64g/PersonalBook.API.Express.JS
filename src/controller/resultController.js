const resultService = require("../services/resultService");

const addResultAsync = async (result) => {
    return await resultService.addResultAsync(result)
} 

const getResultsAsync = async (userId) => {
    return await resultService.getResultsAsync(userId);
}

const updateResultAsync = async (result) => {
    return await resultService.updateResultAsync(result);
}

const deleteResultAsync = async (id) => {
    return await resultService.deleteResultAsync(id);
}

module.exports = { 
    addResultAsync,
    getResultsAsync,
    updateResultAsync,
    deleteResultAsync
}