const semesterService = require("../services/semesterService");

const getSemesterAsync = async (userId) => {
    return await semesterService.getSemesterAsync(userId);
}

const addSemesterAsync = async (semester) => {
    return await semesterService.addSemesterAsync(semester);
}

module.exports = {
    getSemesterAsync,
    addSemesterAsync
}