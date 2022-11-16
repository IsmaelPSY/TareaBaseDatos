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