import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
},
    {
        timestamps: true
    })

const regModel = mongoose.model('admindetails', regSchema)

export default regModel;