const grade = require("../models/grade");
const gradeService = require("../services/gradeService");

const getGradeAsync = async () => {
    return await gradeService.getGradeAsync();
}

const addGradeAsync = async (grade) => {
    return await gradeService.addGradeAsync(grade);
}

const updateGradeAsync = async (grade) => {
    return await gradeService.updateGradeAsync(grade);
}

const deleteGradeAsync = async (id) => {
    return await gradeService.deleteGradeAsync(id);
}

module.exports = {
    getGradeAsync,
    addGradeAsync,
    updateGradeAsync,
    deleteGradeAsync
}