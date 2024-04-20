module.exports = (sequelize, Sequelize) =>{
    const Semester = sequelize.define("Semester_pb", 
    {
        id : {
            type : Sequelize.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        userId : {
            type : Sequelize.UUID,
            allowNull : false
        },
        semesterName : {
            type : Sequelize.STRING,
            allowNull : false
        },
        monthBng : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        year :{
            type : Sequelize.INTEGER,
            allowNull : false
        }
    },
    {
        timestamps : false
    });

    return Semester;
}