const resultRepository = require("../repository/resultRepository");

const addResultAsync = async (result) => {
    return await resultRepository.addResultAsync(result);
}

const getResultsAsync = async (userId) =>{
    return await resultRepository.getResultsAsync(userId);
} 

const updateResultAsync = async (result) => {
    return await resultRepository.updateResultAsync(result);
}

const deleteResultAsync = async (id) => {
    return await resultRepository.deleteResultAsync(id);
}
module.exports = { 
    addResultAsync,
    getResultsAsync,
    updateResultAsync,
    deleteResultAsync
}