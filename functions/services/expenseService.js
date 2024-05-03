const expenseRepository = require("../repository/expenseRepository");

const addExpenseAsync = async(expense) =>{
    return await expenseRepository.addExpenseAsync(expense);
}

const getExpensesAsync = async (userId) => {
    return await expenseRepository.getExpensesAsync(userId);
}

const updateExpenseAsync = async (expense) =>{
    return await expenseRepository.updateExpenseAsync(expense);
}

const deleteExpenseAsync = async (id) => {
    return await expenseRepository.deleteExpenseAsync(id);
}

const getByCategory = async (filter) => {
    return await expenseRepository.getByCategory(filter);
}


module.exports = {
    addExpenseAsync,
    getExpensesAsync,
    updateExpenseAsync,
    deleteExpenseAsync,
    getByCategory
}