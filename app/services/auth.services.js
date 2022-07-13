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
        } else {
            delete msg['name'];
        }
        if (!data.email) {
            msg['email'] = "Email is required"
        } else {
            delete msg['email'];
        }
        if (!data.password) {
            msg['password'] = "password is required"
        } else {
            delete msg['password']
        }
        if (!data.role) {
            msg['role'] = "Role is required"
        } else {
            if (data.role !== 'admin' || data.role !== 'seller' || data.role !== 'costomer') {
                msg['role'] = 'Admin, Seller or Customer can be role values'
            } else {
                delete msg['role']
            }
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