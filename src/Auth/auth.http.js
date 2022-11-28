import * as userContollers from "../User/user.controller.js";
import * as authControllers from "./auth.controller.js";
import {config} from "../config.js"
import jwt from "jsonwebtoken";
import { toPromise } from "../utils/toPromise.js";


export const loginUser = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Missing data' });
    } else if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Missing data' });
    }

    const [response, err] = await toPromise(authControllers.checkUsersCredential(
        req.body.email,
        req.body.password
    ));
    console.log("Sobre REsponse")
    console.log(response)
    
    if (!response) {
        return res.status(401).json({ message: 'Invalid Credential' });
    }

    await userContollers.getUserByEmail(req.body.email)
        .then(user => {
            const token = jwt.sign(
                {
                    id: user.id,
                    email: req.body.email,
                },
                config.jwtSecret
            );
            res.status(200).json({ token: token });
        })
        .catch(err => {
            return res.status(401).json({ message: 'Invalid Credential' });
        })

};

export const registerUser = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: 'Misssing Data 1'
        })
    }
    const newUser = await userContollers.postUser(req.body)

    if (!newUser) {
        return res.status(400).json({
            message: 'Missing Data 2'
        })
    }
    console.log(newUser)
    res.status(201).json(newUser)
}
