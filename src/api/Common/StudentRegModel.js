import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({
    image: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: Number
    },
    phone: {
        type: Number
    },
    branch: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    address: {
        type: String
    }
},
    {
        timestamps: true
    })

const regModel = mongoose.model('registration', regSchema)

export default regModel;