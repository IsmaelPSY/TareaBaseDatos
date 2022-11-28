import { hashSync, compareSync} from "bcrypt";

export const hashPassword = (plainPassword) => {
    return hashSync(plainPassword, 10);
};

export const comparePassword = (plainPassword, hashPassword) => {
    return compareSync(plainPassword, hashPassword);
};
