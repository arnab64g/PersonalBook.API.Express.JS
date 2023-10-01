const grade = require("../models/grade");
const gradeService = require("../services/gradeService");

const getGradeAsync = async () => {
    return await gradeService.getGradeAsync();
}

const addGradeAsync = async (grade) => {
    return await gradeService.addGradeAsync(grade);
}

module.exports = {
    getGradeAsync,
    addGradeAsync,
}