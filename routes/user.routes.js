const express = require("express");
// const app = express();
const router = express.Router();
const loginCheck = require('../app/middleware/auth.middleware');
const UserController = require('../app/controllers/user.controller');
const uploader = require('../app/middleware/uploader.middleware')

const userCtrl = new UserController();

// const loginCheck = (req, res, next) => {
//     // login Check
//     next();
// };

const isAdmin = (res, req, next) => {
    // role checked
    next();
};
// user 
// router.get('/', loginCheck, isAdmin, userList
// );


router.route('/')
    .get(loginCheck, isAdmin, userCtrl.userList)
// .post(userCtrl.registerUser);
// user/3
router.route('/:id')
    //     .get(getDetail)
    .put(loginCheck, isAdmin,
        uploader.single('image'), userCtrl.updateUser)
    .delete(loginCheck, isAdmin, userCtrl.userDelete)
module.exports = router;