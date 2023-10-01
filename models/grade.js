const {sequelize, Sequelize} = require("../database/dbconnect");

module.exports = (sequelize, Sequelize) => {
    const Grade = sequelize.define("Grade", 
    {
        id : {
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        gradeName : {
            type : Sequelize.STRING
        },
        points : {
            type : Sequelize.DECIMAL(5, 2)
        },
        scale : {
            type : Sequelize.INTEGER
        },
        minNumber : {
            type : Sequelize.INTEGER
        },
        maxNumber : {
            type : Sequelize.INTEGER
        }
    },
    {
        timestamps : false
    }
    );

    return Grade;
}