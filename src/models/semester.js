module.exports = (sequelize) =>{
    const Semester = sequelize.define("Semester", 
    {
        id: {
            type: 'INTEGER',
            allowNull: false,
            autoIncrement : true,
            comment: null,
            special: [],
            primaryKey: true,
            foreignKey: [Object]
          },
          semesterName: {
            type: 'CHARACTER VARYING',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          monthBng: {
            type: 'INTEGER',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          year: {
            type: 'INTEGER',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          userId: {
            type: 'UUID',
            allowNull: true,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false,
            foreignKey: [Object]
          }
        
    },
    {
        timestamps : false
    });

    return Semester;
}