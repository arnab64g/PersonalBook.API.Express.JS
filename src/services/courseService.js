const courseRepository = require("../repository/courseRepository");
const resultRepository = require("../repository/resultRepository");

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
    if (await resultRepository.hasCourseAsync(course)) {
        return 0;
    }
    
    return await courseRepository.deleteCourseAsync(course);
}

module.exports = {
    getCoursesAsync,
    addCourseAsync,
    updateCourseAsync,
    deleteCourseAsync
}