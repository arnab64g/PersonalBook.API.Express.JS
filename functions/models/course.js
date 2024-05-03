module.exports = (sequelize, Sequelize) =>{
    const Course = sequelize.define("Course_pb" , {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        userId : {
            type : Sequelize.UUID,
            allowNull : false
        },
        courseCode: {
            type : Sequelize.STRING,
            allowNull : false
        },
        courseTitle : {
            type : Sequelize.STRING,
            allowNull : false
        },
        creditPoint : {
            type : Sequelize.DECIMAL(5, 2),
             allowNull : false
        }
    },
    {
        timestamps : false
    });

    return Course;
}