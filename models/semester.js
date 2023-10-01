module.exports = (sequelize, Sequelize) =>{
    const Semester = sequelize.define("Semester", 
    {
        id : {
            type : Sequelize.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        userId : {
            type : Sequelize.STRING
        },
        semesterName : {
            type : Sequelize.STRING
        },
        monthBng : {
            type : Sequelize.INTEGER
        },
        year :{
            type : Sequelize.INTEGER
        }
    },
    {
        timestamps : false
    });

    return Semester;
}