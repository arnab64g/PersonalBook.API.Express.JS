module.exports = (sequelize) =>{
    const Course = sequelize.define("Course" , {
        id: {
            type: 'INTEGER',
            allowNull: false,
            autoIncrement : true,
            comment: null,
            special: [],
            primaryKey: true,
            foreignKey: [Object]
          },
          courseCode: {
            type: 'CHARACTER VARYING',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          courseTitle: {
            type: 'CHARACTER VARYING',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          creditPoint: {
            type: 'NUMERIC',
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

    return Course;
}