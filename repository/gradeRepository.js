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

const deleteGradeAsync = async (id) => {
    return await db.Grade.destroy({
        where : {
            id : id
        }
    })
} 

module.exports = { 
    getGradesAsync,
    addGradeAsync,
    updateGradeAsync,
    deleteGradeAsync
}