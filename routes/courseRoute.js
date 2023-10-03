const route = require("express").Router();
const {verifyToken} = require("../services/authService");
const courseController = require("../controller/courseController");
const bodyParser = require("body-parser");
route.use(bodyParser.json());

route.get("/", verifyToken, async (req, res) =>{
    const result = await courseController.getCoursesAsync(req.query.id);
    
    res.json(result);
});

route.post("/", verifyToken, async (req, res) => {
    const result = await courseController.addCourseAsync(req.body);
    console.log(req.body);
    res.json(result);
});

route.put("/", verifyToken, async (req, res) => {
    const result = await courseController.updateCourseAsync(req.body);
    
    res.json(result[0]);
});

route.delete("/", verifyToken, async (req, res) => {
    const result = await courseController.deleteCourseAsync(req.query.id);

    res.json(result);
});

module.exports = route;