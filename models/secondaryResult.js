module.exports = (sequelize, Sequelize) =>{
    const SecondaryResult = sequelize.define("SecondaryResult", {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        sl : {
            type : Sequelize.INTEGER
        },
        userId : {
            type : Sequelize.UUID
        },
        subject : {
            type : Sequelize.STRING
        },
        gradeId : {
            type : Sequelize.INTEGER
        },
        isOptional : {
            type : Sequelize.INTEGER
        },
        level : {
            type : Sequelize.INTEGER
        }
    },{
        timestamps : false
    });

    return SecondaryResult;
}

