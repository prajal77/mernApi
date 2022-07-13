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
    registerValidate = (data) => {
        let msg = null;
        if (!data.name) {
            msg['name'] = "Name is required"
        }
        if (!data.email) {
            msg['email'] = "Email is required"
        }
        if (!data.password) {
            msg['password'] = "password is required"
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
}
module.exports = AuthService;