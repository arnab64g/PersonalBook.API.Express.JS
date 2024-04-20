module.exports = (sequelize, Sequelize) => {
    const Result = sequelize.define("Result_pb", {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        userId : {
            type : Sequelize.UUID,
            allowNull : false
        },
        semesterId : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        gradeId : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        courseId : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    },
    {
        timestamps : false
    });

    return Result;
}

