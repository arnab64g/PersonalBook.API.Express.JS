const { QueryTypes } = require("sequelize");
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
    result.summary = await db.sequelize.query(
        `select 
            level, 
            sum(grades.points) as totalPoints, 
            COUNT(secondaryresults.id) as totalSubjects 
        from 
            secondaryresults 
        inner join 
            grades on secondaryresults.gradeId = grades.id 
        group by 
            level;`, 
        {type : QueryTypes.SELECT});
   
    console.log(result.summary);
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

module.exports = {
    getSecondaryResultsAsync,
    addSecondaryResultAsync,
    updateSecondaryResultAsync,
    deleteSecondaryResultAsync
}