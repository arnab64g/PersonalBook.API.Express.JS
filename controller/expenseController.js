const expenseService = require("../services/expenseService");

const addExpenseAsync = async (expense) => {
    return await expenseService.addExpenseAsync(expense);
}

const getExpensesAsync = async (userId) =>{
    return await expenseService.getExpensesAsync(userId);
}

const updateExpenseAsync = async (expense) => {
    return await expenseService.updateExpenseAsync(expense);
}

const deleteExpenseAsync = async(id) => {
    return await expenseService.deleteExpenseAsync(id);
}

module.exports = {
    addExpenseAsync,
    getExpensesAsync,
    updateExpenseAsync,
    deleteExpenseAsync
}