module.exports = (sequelize) => {
    const Result = sequelize.define("Result", {
        id: {
            type: 'INTEGER',
            allowNull: false,
            autoIncrement : true,
            comment: null,
            special: [],
            primaryKey: true,
            foreignKey: [Object]
          },
          semesterId: {
            type: 'INTEGER',
            allowNull: true,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false,
            foreignKey: [Object]
          },
          gradeId: {
            type: 'INTEGER',
            allowNull: true,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false,
            foreignKey: [Object]
          },
          courseId: {
            type: 'INTEGER',
            allowNull: true,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false,
            foreignKey: [Object]
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

    return Result;
}

