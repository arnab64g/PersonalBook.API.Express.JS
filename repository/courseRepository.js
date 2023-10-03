const db = require("../database/dbconnect");

const getCoursesAsync = async (userId) => {
    return await db.Course.findAll({
        where : {
            userId : userId
        }
    });
}

const addCourseAsync = async (course) => {
    return await db.Course.create({
        userId : course.userId,
        courseCode : course.courseCode,
        courseTitle : course.courseTitle,
        creditPoint : course.creditPoint
    });
}

const updateCourseAsync = async (course) => {
    return await db.Course.update({
        userId : course.userId,
        courseCode : course.courseCode,
        courseTitle : course.courseTitle,
        creditPoint : course.creditPoint
    },
    {
        where : {
            id : course.id
        }
    });
}

const deleteCourseAsync = async (id) => {
    return await db.Course.destroy(
        {
            where : {
                id : id
            }
        }
    );
}

module.exports = {
    getCoursesAsync,
    addCourseAsync,
    updateCourseAsync,
    deleteCourseAsync
}