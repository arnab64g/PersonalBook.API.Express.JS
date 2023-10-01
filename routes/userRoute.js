const bodyParser = require("body-parser");
const router = require("express").Router();
const userController = require("../controller/userController");
const {verifyToken} = require("../services/authService")
router.use(bodyParser.json())

router.get('/User', verifyToken, async (req, res) => {
    result = await userController.getProfileAsync(req.query.id);

    console.log(result.dataValues);
    res.json(result.dataValues);
});

router.post('/User', async (req, res) =>{
    result = await userController.createUserAsync(req.body);
    console.log(req.body);
    res.json(result);
});

router.post('/User/login', async(req, res) => {
    let result = await userController.loginUserAsync(req.body);
    res.json(result);
});


module.exports = router;