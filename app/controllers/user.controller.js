const AuthService = require("../services/auth.services");
const db = require("../services/mongodb.service");
const mongodb = require("mongodb");
class UserController {
    constructor() {
        this.authSvc = new AuthService();
    }
    userList = async (req, res, next) => {
        try {
            let selDb = await db();
            if (selDb) {
                let users = await selDb.collection('users').find().toArray();
                res.json({
                    result: users,
                    status: true,
                    msg: "Fetched"
                })
            } else {
                throw "Erroe while db connection"
            }

        } catch (err) {
            next({
                status: 500,
                msg: err
            })
        }
    };

    updateUser = async (req, res, next) => {
        try {
            let data = req.body;
            if (req.file) {
                data.image = req.file.filename;
            }
            console.log(data);
            let validate = this.authSvc.registerValidate(data, true);
            console.log(validate);
            if (validate) {
                next({
                    status: 400,
                    msg: validate
                })
            } else {
                let selDb = await db();
                // console.log(selDb);
                if (selDb) {
                    selDb.collection("users").updataOne({
                        _id: new mongodb.ObjectId(req.params.id)
                    }, {
                        $set: data
                    }).then((respo) => {
                        res.json({
                            result: data,
                            status: true,
                            msg: "User Profile Updated"
                        })
                    })
                        .catch((err) => {
                            next({
                                status: 400,
                                msg: err
                            })
                        })
                } else {
                    throw "Error establised db connection"
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

    userDelete = async (req, res, next) => {
        try {
            let selDb = await db();
            if (selDb) {
                let det = await selDb.collection('users'.deleteOne({
                    _id: new mongodb.ObjectId(req.params.id)
                }))
                res.json({
                    result: update,
                    status: true,
                    msg: 'user deleted!'
                })
            } else {
                throw "Error while db connection"
            }
        }
        catch (err) {
            next({
                status: 500,
                msg: err
            })
        }
    }
}

module.exports = UserController;