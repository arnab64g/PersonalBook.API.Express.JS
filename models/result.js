module.exports = (sequelize, Sequelize) => {
    const Result = sequelize.define("Result", {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        userId : {
            type : Sequelize.UUID
        },
        semesterId : {
            type : Sequelize.INTEGER
        },
        gradeId : {
            type : Sequelize.INTEGER
        },
        courseId : {
            type : Sequelize.INTEGER
        }
    },
    {
        timestamps : false
    });

    return Result;
}

