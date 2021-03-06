const router = require('express').Router();
const AuthController = require('../app/controllers/auth.controller')
const authCtrl = new AuthController();
const uploader = require('../app/middleware/uploader.middleware');

router.post('/login', authCtrl.login);
router.post('/register',
    (req, res, next) => {
        req.dir = 'public/uploads/user';
        next();
    },
    uploader.single('image'), authCtrl.register);


module.exports = router;