module.exports = (sequelize, Sequelize) =>{
    const Course = sequelize.define("Course" , {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        userId : {
            type : Sequelize.UUID
        },
        courseCode: {
            type : Sequelize.STRING
        },
        courseTitle : {
            type : Sequelize.STRING
        },
        creditPoint : {
            type : Sequelize.DECIMAL(5, 2)
        }
    },
    {
        timestamps : false
    });

    return Course;
}