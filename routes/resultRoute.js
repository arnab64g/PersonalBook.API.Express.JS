const { verifyToken } = require("../services/authService");
const resultController = require("../controller/resultController");
const route = require("express").Router();
const bodyParser = require("body-parser");
route.use(bodyParser.json());

route.get("/", verifyToken, async(req, res) => {
    console.log(req.query.id);
});

route.post("/", verifyToken, async(req, res) => {
    const result = await resultController.addResultAsync(req.body);

    res.json(result);
});

module.exports = route