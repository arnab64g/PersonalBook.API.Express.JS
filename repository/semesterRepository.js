const db = require("../database/dbconnect");

const getSemestersAsync = async (userId) => {
    return await db.Semester.findAll({
        where : {
            userId : userId
        }
    })
}

const addSemesterAsync = async (semester) => {
    return await db.Semester.create({
        userId  : semester.userId,
        semesterName : semester.semesterName,
        monthBng : semester.monthBng,
        year : semester.year
    })
}

module.exports = {
    getSemestersAsync,
    addSemesterAsync
}