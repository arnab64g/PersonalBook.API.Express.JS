const bodyParser = require("body-parser");
const router = require("express").Router();
const userController = require("../controller/userController");
const {verifyToken} = require("../services/authService");
const { roleChange, getall } = require("../temp");
router.use(bodyParser.json())

router.get('/', verifyToken, async (req, res) => {
    result = await userController.getProfileAsync(req.query.id);

    res.json(result.dataValues);
});

router.post('/', async (req, res) =>{
    result = await userController.createUserAsync(req.body);

    res.json(result);
});

router.post('/login', async(req, res) => {
    
    let result = await userController.loginUserAsync(req.body);

    res.json(result);
}); 


router.get('/test', async(req, res) =>{
    let result = await roleChange();
    let usrs =  await getall()
    console.log(result, usrs);
    res.json({res : result, users : usrs});
})

module.exports = router;