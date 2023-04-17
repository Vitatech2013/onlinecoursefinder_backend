import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({
    universityName: {
        type: String,
        unique:true
    },
    country: {
        type: String
    },
    location: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    Website: {
        type: String
    }
},
    {
        timestamps: true
    })

const regModel = mongoose.model('universities', regSchema)

export default regModel;