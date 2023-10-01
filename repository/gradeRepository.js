const db = require("../database/dbconnect");
const grade = require("../models/grade");

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

const updateGradeAsync = async(grade) => {
    return await db.Grade.update(
        {
            gradeName : grade.gradeName,
            points : grade.points,
            scale : grade.scale,
            maxNumber : grade.maxNumber,
            minNumber : grade.minNumber
        }, 
        {
            where : 
            {
                id : grade.id
            }
        });
}

module.exports = { 
    getGradesAsync,
    addGradeAsync,
    updateGradeAsync
}