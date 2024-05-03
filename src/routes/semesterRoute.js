const route = require("express").Router();
const { verifyToken } = require("../services/authService");
const semesterController = require("../controller/semesterController");
const bodyParser = require("body-parser");
route.use(bodyParser.json());

route.get("/", verifyToken, async (req, res) => {
    const result = await semesterController.getSemesterAsync(req.query.id);
    
    res.json(result);
});

route.post("/", verifyToken,  async (req, res) => {
    const result = await semesterController.addSemesterAsync(req.body);

    res.json(result);
});

route.put("/", verifyToken, async (req, res) => {
    const result = await semesterController.updateSemesterAsync(req.body);
    
    res.json(result[0]);
});

route.delete("/", verifyToken, async (req, res) => {
    const result = await semesterController.deleteSemesterAsync(req.query.id);

    res.json(result);
});

module.exports = route;
