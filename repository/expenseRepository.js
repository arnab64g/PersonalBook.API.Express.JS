const { Op } = require("sequelize");
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

const getByCategory = async (filter) => {
    console.log(filter);
    let list = [];
    if ( !filter.fromDate && !filter.toDate) {
        list = await db.Expense.findAll({
            attributes : ['category', [db.sequelize.fn("SUM", db.sequelize.col("amount")), "total"]],
            where : {
                userId : filter.userId
            },
            group : ['category']
        });
    }
    else if (filter.fromDate && !filter.toDate) {
        list = await db.Expense.findAll({
            attributes : ['category', [db.sequelize.fn("SUM", db.sequelize.col("amount")), "total"]],
            where : {
                userId : filter.userId,
                date : {
                    [Op.gte] : filter.fromDate
                }
            },
            group : ['category']
        });
    }
    else if (!filter.fromDate && filter.toDate) {
        list = await db.Expense.findAll({
            attributes : ['category', [db.sequelize.fn("SUM", db.sequelize.col("amount")), "total"]],
            where : {
                userId : filter.userId,
                date : {
                    [Op.lte] : filter.toDate
                },
            },
            group : ['category']
        });
    }
    else {
        list = await db.Expense.findAll({
            attributes : ['category', [db.sequelize.fn("SUM", db.sequelize.col("amount")), "total"]],
            where : {
                userId :  filter.userId,
                date : {
                    [Op.between] : [filter.fromDate, filter.toDate]
                },
                
            },
            group : ['category']
        });
    }
    for (let index = 0; index < list.length; index++) {
        list[index].total = Number(list[index].total); 
    }

    return list;
}

module.exports = {
    addExpenseAsync,
    getExpensesAsync,
    updateExpenseAsync,
    deleteExpenseAsync,
    getByCategory
}