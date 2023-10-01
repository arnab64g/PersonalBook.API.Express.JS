const grade = require("../models/grade");
const gradeRepository = require("../repository/gradeRepository");

const getGradeAsync = async() => {
    return await gradeRepository.getGradesAsync();
}

const addGradeAsync = async (grade) => {
    return await gradeRepository.addGradeAsync(grade);
}

module.exports = {
    getGradeAsync,
    addGradeAsync
}