const secondaryResultController = require("../controller/secondaryResultController");
const { verifyToken } = require("../services/authService");
const route = require("express").Router();
const bodyParser = require("body-parser");
route.use(bodyParser.json());

route.get("/", verifyToken, async (req, res) => {
    const result = await secondaryResultController.getSecondaryResultsAsync(req.query.id);

    res.json(result);
});

route.post("/", verifyToken, async (req, res) => {
    const result = await secondaryResultController.addSecondaryResultAsync(req.body);
	console.log(req.body);
    res.json(result);
});

route.put("/", verifyToken, async (req, res) => {
    const result = await secondaryResultController.updateSecondaryResultAsync(req.body);

    res.json(result[0]);
});

route.delete("/", verifyToken, async (req, res) => {
    const result = await secondaryResultController.deleteSecondaryResultAsync(req.query.id);

    res.json(result);
});

module.exports = route;