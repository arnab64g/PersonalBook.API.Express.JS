module.exports = (sequelize) =>{
    const SecondaryResult = sequelize.define("Secondaryresult", {
        id: {
            type: 'INTEGER',
            allowNull: false,
            autoIncrement : true,
            comment: null,
            special: [],
            primaryKey: true,
            foreignKey: [Object]
          },
          sl: {
            type: 'INTEGER',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          subject: {
            type: 'CHARACTER VARYING',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          isOptional: {
            type: 'INTEGER',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          level: {
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
          },
          gradeId: {
            type: 'INTEGER',
            allowNull: true,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false,
            foreignKey: [Object]
          }
    },{
        timestamps : false
    });

    return SecondaryResult;
}

