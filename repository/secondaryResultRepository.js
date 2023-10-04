const db = require("../database/dbconnect");

const getSecondaryResultsAsync = async (userId) => {
    let result = {
        results : [],
        summary : []
    }

    result.results = await db.SecondaryResult.findAll({
        include : db.Grade,
        attributes : ['id', 'sl', 'subject', 'Grade.gradeName', 'userId', 'gradeId', 'isOptional', 'level', 'Grade.points'],
        where : {
            userId : userId
        },
        raw : true
    });
    result.summary = await db.SecondaryResult.findAll({
        attributes: [
            "level",
            [db.sequelize.fn("COUNT", db.sequelize.col("SecondaryResult.id")), 'totalSubjects'],
            [db.sequelize.fn("SUM", db.sequelize.col("Grade.points")), 'totalPoints']
        ],
        include : {
            model : db.Grade, attributes : []
        },
        where : {
            userId : userId
        },
        group : ['level'],
        raw: true
    });

    return result;
}

const addSecondaryResultAsync = async (result) => {
    return await db.SecondaryResult.create({
        sl : result.sl,
        subject : result.subject,
        gradeId : result.gradeId,
        isOptional : result.isOptional,
        level : result.level
    });
}

const updateSecondaryResultAsync = async (result) => {
    return await db.SecondaryResult.update({
        sl : result.sl,
        subject : result.subject,
        gradeId : result.gradeId,
        isOptional : result.isOptional,
        level : result.level
    },
    {
        where :{
            id : result.id
        }
    });
}

const deleteSecondaryResultAsync = async (id) => {
    return await db.SecondaryResult.destroy({
        where :{
            id : id
        }
    })
}

const hasGradeAsync = async (gradeId) =>{
    return db.SecondaryResult.findOne({
        where:{
            gradeId : gradeId
        }
    })
}

module.exports = {
    getSecondaryResultsAsync,
    addSecondaryResultAsync,
    updateSecondaryResultAsync,
    deleteSecondaryResultAsync,
    hasGradeAsync
}