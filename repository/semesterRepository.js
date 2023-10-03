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

const updateSemesterAsync = async (semester) => {
    return await db.Semester.update({
        semesterName : semester.semesterName,
        monthBng : semester.monthBng,
        year : semester.year
    },
    {
        where : {
            id : semester.id
        }
    })
}

const deleteSemesterAsync = async (id) => {
    return await db.Semester.destroy({
        where :{
            id : id
        }
    })
}

module.exports = {
    getSemestersAsync,
    addSemesterAsync,
    deleteSemesterAsync,
    updateSemesterAsync
}