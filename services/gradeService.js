const grade = require("../models/grade");
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

module.exports = {
    getGradeAsync,
    addGradeAsync,
    updateGradeAsync
}