const router = require('express').Router();
const AuthController = require('../app/controllers/auth.controller')

const authCtrl = new AuthController();

router.post('/login', authCtrl.login);
router.post('/register', authCtrl.register);


module.exports = router;