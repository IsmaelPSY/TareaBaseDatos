import * as controller from "./user.controller.js";


export const postUser = async(req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: 'Misssing Data 1'
        })
    }
    const newUser = await controller.postUser(req.body)

    if (!newUser) {
        return res.status(400).json({
            message: 'Missing Data 2'
        })
    }
    console.log(newUser)
    res.status(201).json(newUser)
}

export const listUser = async(req, res) => {
    const products = await controller.listUser()
    res.json(products)
}

export const deleteUser = async(req, res) => {
    const user = await controller.deleteUser(req.params.id)
    res.json(user)
}

export const updateUser = async(req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: 'Misssing Data 1'
        })
    }
        await controller.updateUser(req.params.id, req.body)
        .then(user => {res.json({message: "Update Succesful"})})
        .catch(err => {
            res.status(400).json(err)
        })

}

export const getUser = async(req, res) => {
    const user = await controller.getUserById(req.params.id)
    res.json(user)
}