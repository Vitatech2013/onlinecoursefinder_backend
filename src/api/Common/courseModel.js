import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({    
    university:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"universities"
    },
    courseName: {
        type: String
    },
    fee: {
        type: Number
    },
    duration: {
        type: Number
    }
},
    {
        timestamps: true
    })

const regModel = mongoose.model('courses', regSchema)

export default regModel;