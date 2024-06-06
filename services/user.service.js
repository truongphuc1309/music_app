import users from '../db/users.js';

class UserService {
    static login({ email, password }) {
        for (let user of users) {
            if (user.password === password && user.email === email) {
                return user;
            }
        }
        return null;
    }
}

export default UserService;
