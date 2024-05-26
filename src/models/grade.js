module.exports = (sequelize) => {
    const Grade = sequelize.define("Grade", 
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
          gradeName: {
            type: 'CHARACTER VARYING',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          points: {
            type: 'NUMERIC',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          scale: {
            type: 'INTEGER',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          minNumber: {
            type: 'INTEGER',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          maxNumber: {
            type: 'INTEGER',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          }
    },
    {
        timestamps : false
    }
    );

    return Grade;
}