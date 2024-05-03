const courseService = require("../services/courseService");

const getCoursesAsync = async (userId) => {
    return await  courseService.getCoursesAsync(userId);
}

const addCourseAsync = async (course) => {
    return await courseService.addCourseAsync(course);
}

const updateCourseAsync = async (course) => {
    return await courseService.updateCourseAsync(course);
}

const deleteCourseAsync = async (course) => {
    return await courseService.deleteCourseAsync(course);
}

module.exports = {
    getCoursesAsync,
    addCourseAsync,
    updateCourseAsync,
    deleteCourseAsync
}