const secondaryResultRepository = require("../repository/secondaryResultRepository");

const getSecondaryResultsAsync = async (userId) => {
    return await secondaryResultRepository.getSecondaryResultsAsync(userId);
}

const addSecondaryResultAsync = async (result) => {
    return await secondaryResultRepository.addSecondaryResultAsync(result);
}

const updateSecondaryResultAsync = async (result) => {
    return await secondaryResultRepository.updateSecondaryResultAsync(result);
}

const deleteSecondaryResultAsync = async (id) => {
    return await secondaryResultRepository.deleteSecondaryResultAsync(id);
}

module.exports = {
    getSecondaryResultsAsync,
    addSecondaryResultAsync,
    updateSecondaryResultAsync,
    deleteSecondaryResultAsync
}