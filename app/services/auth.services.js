const db = require("./mongodb.service");

class AuthService {
    loginValidate = (data) => {
        let msg = null;
        if (!data.email || !data.password) {
            msg = "Credendtials are required";
        } else {
            msg = null;
        }
        return msg;
    }
    registerValidate = (data, isUpdate = false) => {
        let msg = null;
        if (!data.name) {
            msg['name'] = "Name is required"
        }
        if (!data.email) {
            msg['email'] = "Email is required"
        }
        if (!isUpdate) {
            if (!data.password) {
                msg['password'] = "password is required"
            }
        }
        if (!data.role) {
            msg['role'] = "Role is required"
        }
        if (msg) {
            throw msg
        } else {
            return null;
        }
        // return msg;
    }

    login = async (data) => {
        try {
            let dbSel = await db();
            let user = await dbSel.collection('users').findOne({
                email: data.email,
                password: data.password
            });
            if (user) {
                return user;
            } else {
                throw { status: 400, msg: "User doesn't exist" }
            }
        }
        catch (err) {
            throw err;
        }
    }


    registerUser = (data) => {
        return new Promise((res, rej) => {
            db()
                .then((sel) => {
                    return sel.collection('users').insertOne(data)
                })
                .then((ak) => {
                    res(ak);
                })
                .catch((err) => {
                    rej(err);
                })
        })
    }



}
module.exports = AuthService;