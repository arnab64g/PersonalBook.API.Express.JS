module.exports = (sequalize, Sequalize) =>{
    const Expense = sequalize.define("Expense", {
        id : {
            type : Sequalize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        userId : {
            type : Sequalize.UUID,
            allowNull : false
        },
        category : {
            type : Sequalize.INTEGER,
            allowNull : false
        },
        date : {
            type : Sequalize.DATE,
            allowNull : false
        },
        amount : {
            type : Sequalize.DECIMAL(10, 2),
            allowNull : false
        },
        description : {
            type :Sequalize.STRING
        }
    },
    {
        timestamps : false
    });
    
    return Expense;
}