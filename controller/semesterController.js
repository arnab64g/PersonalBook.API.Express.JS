const semesterService = require("../services/semesterService");

const getSemesterAsync = async (userId) => {
    return await semesterService.getSemesterAsync(userId);
}

const addSemesterAsync = async (semester) => {
    return await semesterService.addSemesterAsync(semester);
}

const updateSemesterAsync = async (semester) => {
    return await semesterService.updateSemesterAsync(semester);
}

const deleteSemesterAsync = async (id) => {
    return await semesterService.deleteSemesterAsync(id);
}


module.exports = {
    getSemesterAsync,
    addSemesterAsync,
    updateSemesterAsync,
    deleteSemesterAsync
}