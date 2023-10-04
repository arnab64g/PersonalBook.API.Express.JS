const gradeRepository = require("../repository/gradeRepository");
const secondaryResultRepository = require("../repository/secondaryResultRepository");
const resultRepository = require("../repository/resultRepository");

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
    if (await secondaryResultRepository.hasGradeAsync(id)) {
        return 0;
    }

    if (await resultRepository.hasGradeAsync(id)) {
        return 0;
    }
    
    return await gradeRepository.deleteGradeAsync(id);
}

module.exports = {
    getGradeAsync,
    addGradeAsync,
    updateGradeAsync,
    deleteGradeAsync
}