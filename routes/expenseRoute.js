const { verifyToken } = require("../services/authService");
const expenseController = require("../controller/expenseController");
const route = require("express").Router();
const bodyParser = require("body-parser");
route.use(bodyParser.json());

route.get("/", verifyToken, async (req, res) => {
    const result = await expenseController.getExpensesAsync(req.query.id);

    res.json(result);
});

route.post("/", verifyToken, async (req, res) =>{
    const result = await expenseController.addExpenseAsync(req.body);

    res.json(result);
});

route.put("/", verifyToken, async (req, res) => {
    const result = await expenseController.updateExpenseAsync(req.body);
    
    res.json(result[0]);
});

route.delete("/", verifyToken, async (req, res) => {
    const result = await expenseController.deleteExpenseAsync(req.query.id);

    res.json(result);
});

module.exports = route;