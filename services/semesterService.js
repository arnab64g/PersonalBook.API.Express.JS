const semesterRepository = require("../repository/semesterRepository");

const getSemesterAsync = async (userId) => {
    return await semesterRepository.getSemestersAsync(userId);
}

const addSemesterAsync = async (semester) => {
    return await semesterRepository.addSemesterAsync(semester);
}

module.exports = {
    getSemesterAsync,
    addSemesterAsync
}