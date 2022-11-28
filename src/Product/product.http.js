import * as controller from "./product.controller.js";


export const postProduct = async(req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: 'Misssing Data 1'
        })
    }
    const newProduct = await controller.postProduct(req.body)

    if (!newProduct) {
        return res.status(400).json({
            message: 'Missing Data 2'
        })
    }
    console.log(newProduct)
    res.status(201).json(newProduct)
}

export const listProduct = async(req, res) => {
    const products = await controller.listProduct()
    res.json(products)
}

export const getProduct = async(req, res) => {
    const product = await controller.getProduct(req.params.id)
    res.json(product)
}

export const updateProduct = async(req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: 'Misssing Data 1'
        })
    }
        await controller.updateProduct(req.params.id, req.body)
        .then(product => {res.json({message: "Update Succesful"})})
        .catch(err => {
            res.status(400).json(err)
        })

}

export const deleteProduct = async(req, res) => {
    const product = await controller.deleteProduct(req.params.id)
    res.json(product)
}