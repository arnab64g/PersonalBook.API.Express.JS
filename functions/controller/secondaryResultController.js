const secondaryResultService = require("../services/secondaryResultService");

const getSecondaryResultsAsync = async (userId) => {
    return await secondaryResultService.getSecondaryResultsAsync(userId);
}

const addSecondaryResultAsync = async (result) => {
    return await secondaryResultService.addSecondaryResultAsync(result);
}

const updateSecondaryResultAsync = async (result) => {
    return await secondaryResultService.updateSecondaryResultAsync(result);
}

const deleteSecondaryResultAsync = async (id) => {
    return await secondaryResultService.deleteSecondaryResultAsync(id);
}

module.exports = {
    getSecondaryResultsAsync,
    addSecondaryResultAsync,
    deleteSecondaryResultAsync,
    updateSecondaryResultAsync
}