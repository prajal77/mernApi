const AuthService = require('../services/auth.services');
// const db = require('../services/mongodb.service');
class AuthController {
    constructor() {
        this.authSvc = new AuthService;
    }
    login = async (req, res, next) => {
        try {
            let data = req.body;
            let validationMsg = this.authSvc.loginValidate(data);
            if (validationMsg) {
                next({
                    status: 400,
                    msg: validationMsg
                })
            } else {
                let user = await this.authSvc.login(data);
                console.log(data);
                res.json({
                    result: user,
                    status: true,
                    msg: "User logged in success"
                })
            }
        }
        catch (err) {
            next(err)
        }

    }
    register = async (req, res, next) => {
        try {
            let data = req.body;
            // console.log(data);
            if (req.file) {
                data.image = req.file.filename;
            }
            // console.log(req.file);//single file
            // console.log(req.files);//multiple file

            this.authSvc.registerValidate(data);
            // email.send
            //db operation
            this.authSvc.registerUser(data)
                .then((succ) => {
                    res.json({
                        status: true,
                        msg: 'user registered',
                        result: data
                    })
                })
                .catch((err) => {
                    next({
                        status: 400,
                        msg: err
                    })
                })
        }
        catch (error) {
            next({
                status: 422,
                msg: error
            })
        }
    }
}

module.exports = AuthController;