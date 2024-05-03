const { verifyToken } = require("../services/authService");
const resultController = require("../controller/resultController");
const route = require("express").Router();
const bodyParser = require("body-parser");

route.use(bodyParser.json());

route.get("/", verifyToken, async(req, res) => {
    const result = await resultController.getResultsAsync(req.query.id);
    
    res.json(result);
});

route.post("/", verifyToken, async(req, res) => {
    const result = await resultController.addResultAsync(req.body);

    res.json(result);
});

route.put("/", verifyToken, async(req, res) => {
    const result = await resultController.updateResultAsync(req.body);

    res.json(result[0]);
});

route.delete("/", verifyToken, async(req, res) => {
    const result = await resultController.deleteResultAsync(req.query.id);

    res.json(result);
});

module.exports = route