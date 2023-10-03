const db = require("../database/dbconnect");

const addResultAsync = async (result) =>{
    return await db.Result.create({
        userId : result.userId,
        semesterId : result.semesterId,
        gradeId : result.gradeId,
        courseId : result.courseId
    });
}

module.exports = {
    addResultAsync
}