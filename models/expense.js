module.exports = (sequalize, Sequalize) =>{
    const Expense = sequalize.define("Expense", {
        id : {
            type : Sequalize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        userId : {
            type : Sequalize.UUID
        },
        category : {
            type : Sequalize.INTEGER
        },
        date : {
            type : Sequalize.DATE
        },
        amount : {
            type : Sequalize.DECIMAL(10, 2)
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