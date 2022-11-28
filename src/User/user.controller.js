import User from '../models/User.js'
import { hashPassword } from '../utils/crypto.js';


export const postUser = async (input) => {
    const hashedPassword = hashPassword(input.password);
    input.password = hashedPassword
    const newUser = User(input)

    const user = await newUser.save()
    return user
};

export const listUser = async() => {
    const lista = await User.find().lean()
    return lista
}

export const getUserById = async(id)=> {
    const user = await User.findById(id)
    return user
}

export const getUserByEmail = async(email)=> {
    const user = await User.find({email: email})
    return user
}

export const deleteUser = async(id)=> {
    const user = await User.findOneAndRemove({ _id: id })
    return user
}

export const updateUser = async(id, input) => {
    const user = 
            await User.updateOne({_id:id},input)
    return user
}