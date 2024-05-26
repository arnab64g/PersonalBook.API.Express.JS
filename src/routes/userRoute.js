const bodyParser = require("body-parser");
const router = require("express").Router();
const userController = require("../controller/userController");
const {verifyToken} = require("../services/authService");

router.use(bodyParser.json())

router.get('/', verifyToken, async (req, res) => {
    result = await userController.getProfileAsync(req.query.id);
    
    res.json(result);
});

router.post('/', async (req, res) =>{
    result = await userController.createUserAsync(req.body);

    res.json(result);
});

router.post('/login', async(req, res) => {
    console.log(req.body);
    let result = await userController.loginUserAsync(req.body);

    res.json(result);
}); 

module.exports = router;