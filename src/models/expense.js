module.exports = (sequalize) =>{
    const Expense = sequalize.define("Expense", {
        id: {
            type: 'INTEGER',
            allowNull: false,
            autoIncrement : true,
            comment: null,
            special: [],
            primaryKey: true,
            foreignKey: [Object]
          },
          category: {
            type: 'INTEGER',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          date: {
            type: 'TIMESTAMP WITHOUT TIME ZONE',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          amount: {
            type: 'NUMERIC',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          description: {
            type: 'CHARACTER VARYING',
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
    
    return Expense;
}