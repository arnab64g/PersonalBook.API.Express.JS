module.exports = (sequelize, Sequelize) => {
    const Grade = sequelize.define("Grade_pb", 
    {
        id : {
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        gradeName : {
            type : Sequelize.STRING,
            allowNull : false
        },
        points : {
            type : Sequelize.DECIMAL(5, 2),
            allowNull : false
        },
        scale : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        minNumber : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        maxNumber : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    },
    {
        timestamps : false
    }
    );

    return Grade;
}