import Product from '../models/Product.js'



export const postProduct = async(input) => {
    const product = Product(input)    
    const productSaved = await product.save()
    return productSaved
}

export const listProduct = async() => {
    const lista = await Product.find().lean()
    return lista
}

export const getProduct = async(id) => {
    const product = await Product.findById(id)
    return product
}

export const updateProduct = async(id, input) => {
    const product = 
            await Product.updateOne({_id:id},input)
    return product
}

export const deleteProduct = async(id)=> {
    const product = await Product.findOneAndRemove({ _id: id })
    return product
}