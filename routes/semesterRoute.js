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

    res.json(result);
});

route.put("/Semester", verifyToken, async (req, res) => {
    const result = await semesterController.updateSemesterAsync(req.body);
    
    res.json(result[0]);
});

route.delete("/Semester", verifyToken, async (req, res) => {
    const result = await semesterController.deleteSemesterAsync(req.query.id);

    res.json(result);
});

module.exports = route;
