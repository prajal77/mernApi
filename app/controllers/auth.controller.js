const AuthService = require('../services/auth.services');
const db = require('../services/mongodb.service');
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
                    status: 422,
                    msg: validationMsg
                })

            } else {
                let seldb = await db();
                if (seldb) {
                    let user = await seldb.collection('users').findOne({
                        email: data.email,
                        password: data.password
                    });
                    if (user) {
                        res.json({
                            result: user,
                            msg: "User logged in successsfully",
                            status: true
                        })

                    } else {
                        next({
                            status: 400,
                            msg: "Credential does not match"
                        })
                    }

                } else {
                    throw "Error connecting db";
                }
            }
        }
        catch (err) {
            next({
                status: 500,
                msg: err
            })
        }

    }
    register = (req, res, next) => {
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
            db()
                .then((setDb) => {
                    return setDb.collection('users').insertOne(data)
                })
                .then((respons) => {
                    req.myEvent.emit('send-register-email', data)

                    res.json({
                        result: data,
                        stats: true,
                        msg: "Success"
                    })
                })
                .catch((err) => {
                    next({
                        status: 500,
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