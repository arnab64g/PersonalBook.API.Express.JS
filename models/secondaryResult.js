module.exports = (sequelize, Sequelize) =>{
    const SecondaryResult = sequelize.define("SecondaryResult", {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        sl : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        userId : {
            type : Sequelize.UUID,
            allowNull : false
        },
        subject : {
            type : Sequelize.STRING,
            allowNull : false
        },
        gradeId : {
            type : Sequelize.INTEGER,
            allowNull :false
        },
        isOptional : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        level : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    },{
        timestamps : false
    });

    return SecondaryResult;
}

