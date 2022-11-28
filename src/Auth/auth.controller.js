import * as controller from "../User/user.controller.js";
import { comparePassword } from "../utils/crypto.js";
import { toPromise } from "../utils/toPromise.js";

export const checkUsersCredential = async (email, password) => {
    const [user, err] = await toPromise(controller.getUserByEmail(email));
    if (!err && user) {
        return comparePassword(password, user[0].password);
    } else {
        return null;
    }
};