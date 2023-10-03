const courseRepository = require("../repository/courseRepository");

const getCoursesAsync = async (userId) =>{
    return await courseRepository.getCoursesAsync(userId);
}

const addCourseAsync = async (course) => {
    return await courseRepository.addCourseAsync(course);
}

const updateCourseAsync = async (course) => {
    return await courseRepository.updateCourseAsync(course);
}

const deleteCourseAsync = async (course) => {
    return await courseRepository.deleteCourseAsync(course);
}

module.exports = {
    getCoursesAsync,
    addCourseAsync,
    updateCourseAsync,
    deleteCourseAsync
}