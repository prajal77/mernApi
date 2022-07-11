const express = require("express");
// const app = express();
const router = express.Router();

const loginCheck = (req, res, next) => {
    // login Check
    next();
};

const isAdmin = (res, req, next) => {
    // role checked
    next();
};
const userList = (res, req, next) => {
    // finally list user
    res.json();
}
// user 
router.get('/', loginCheck, isAdmin, userList
);

router.post('/', (req, res, next) => {
    //user register
    // form data receive
    // validate
    // db validate
    // query
    // response

    next({
        status: 400,
        msg: {
            email: "Invalid Email"
        }

    })
});



module.exports = router;