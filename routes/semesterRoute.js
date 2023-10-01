const route = require("express").Router();
const { verifyToken } = require("../services/authService");
const semesterController = require("../controller/semesterController")

route.get("/Semester", verifyToken, async (req, res) => {
    const result = await semesterController.getSemesterAsync(req.query.id);
    console.log(result);
    res.json(result);
});

route.post("/Semester", verifyToken,  async (req, res) => {
    const result = await semesterController.addSemesterAsync(req.body);

    console.log(result);
    res.json(result);
});

module.exports = route;
