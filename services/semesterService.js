const semesterRepository = require("../repository/semesterRepository");
const resultRepository = require("../repository/resultRepository");

const getSemesterAsync = async (userId) => {
    return await semesterRepository.getSemestersAsync(userId);
}

const addSemesterAsync = async (semester) => {
    return await semesterRepository.addSemesterAsync(semester);
}

const updateSemesterAsync = async (semester) => {
    return await semesterRepository.updateSemesterAsync(semester);
}

const deleteSemesterAsync = async (id) => {
    if (await resultRepository.hasSemesterAsync(id)) {
        return 0;
    }
    
    return await semesterRepository.deleteSemesterAsync(id);
}

module.exports = {
    getSemesterAsync,
    addSemesterAsync,
    updateSemesterAsync,
    deleteSemesterAsync

}