const gradeRepository = require("../repository/gradeRepository");

const getGradeAsync = async() => {
    return await gradeRepository.getGradesAsync();
}

const addGradeAsync = async (grade) => {
    return await gradeRepository.addGradeAsync(grade);
}

const updateGradeAsync = async (grade) => {
    return await gradeRepository.updateGradeAsync(grade);
}

const deleteGradeAsync = async (id) => {
    return await gradeRepository.deleteGradeAsync(id);
}

module.exports = {
    getGradeAsync,
    addGradeAsync,
    updateGradeAsync,
    deleteGradeAsync
}