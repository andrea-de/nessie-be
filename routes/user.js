const router = require('express').Router();
const userController = require("../controllers/user.js");

module.exports = router;

router.post('/signin', userController.signin);
router.post('/signup', userController.signup);
