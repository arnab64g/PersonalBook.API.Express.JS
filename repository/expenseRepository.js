const db = require("../database/dbconnect");

const addExpenseAsync = async (expense) => {
    return db.Expense.create({
        userId : expense.userId,
        category : expense.category,
        date : expense.date,
        amount : expense.amount,
        description : expense.description
    });
}

const getExpensesAsync = async (userId) => {
    return await db.Expense.findAll({
        where : {
            userId : userId
        }
    })
}

const updateExpenseAsync = async (expense) => {
    return await db.Expense.update({
        category : expense.category,
        date : expense.date,
        amount : expense.amount,
        description : expense.description
    },
    {
        where : {
            id : expense.id
        }
    })
}

const deleteExpenseAsync = async (id) => {
    return await db.Expense.destroy({
        where : {
            id : id
        }
    })
}

module.exports = {
    addExpenseAsync,
    getExpensesAsync,
    updateExpenseAsync,
    deleteExpenseAsync,
}