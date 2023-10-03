const resultService = require("../services/resultService");

const addResultAsync = async (result) => {
    return await resultService.addResultAsync(result)
} 

module.exports = { 
    addResultAsync
}