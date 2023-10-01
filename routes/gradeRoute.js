const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const {verifyToken, verifyAdmin} = require("../services/authService");
const gradeController = require("../controller/gradeController");
require("dotenv").config();
router.use(bodyParser.json());

router.get("/Grade", verifyToken, async(req, res) =>{
    const result = await gradeController.getGradeAsync();
    res.json(result);
});

router.post("/Grade", verifyAdmin, async (req, res) => {
    const result = await gradeController.addGradeAsync(req.body);

    res.json(result);
})

router.put("/Grade", verifyAdmin, async (req, res) => {
    const result = await gradeController.updateGradeAsync(req.body);

    console.log(req.body);

    res.json(result[0]);
})

module.exports = router;
