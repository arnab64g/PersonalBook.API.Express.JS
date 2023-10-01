const db = require("../database/dbconnect");

const getGradesAsync = async() => {
    return await db.Grade.findAll();
}

const addGradeAsync = async(grade) => {
    return await db.Grade.create({
        gradeName : grade.gradeName,
        points : grade.points,
        scale : grade.scale,
        maxNumber : grade.maxNumber,
        minNumber : grade.minNumber
    })
}

module.exports = { 
    getGradesAsync,
    addGradeAsync
}