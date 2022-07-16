const AuthService = require('../services/auth.services');

class AuthController {
    constructor() {
        this.authSvc = new AuthService;
    }
    login = (req, res, next) => {
        let data = req.body;
        console.log(req.file);
        let validationMsg = this.authSvc.loginValidate(data);
        if (validationMsg) {
            next({
                status: 422,
                msg: validationMsg
            })
            // req.email => null ..400 bad request
            // req.username =>'' 422 ..unprocessable entity
            // res.status(422).json({
            //     msg: "Credentials are required",
            //     result: null,
            //     status : false
            //     // msg: {
            //     //     email: "Email is required",
            //     //     password: "password is required"

            //     // }
            // })
        } else {
            res.json({
                result: data
            })
        }
    }
    register = (req, res, next) => {
        try {
            let data = req.body;
            if (req.file) {
                data.image = req.file.filename;
            }
            // console.log(req.file);//single file
            // console.log(req.files);//multiple file

            this.authSvc.registerValidate(data);
            // email.send
            req.myEvent.emit('send-register-email', data)


            //   db operation
            res.json({
                result: data,
                status: true,
                msg: "Success"
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