import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    gender: {
        enum: ["male", "female"],
        
    },
    file: { 
        type: String,
        required: true,
        unique: true,  // prevent from duplicate
    }
})


const userModel = mongoose.model("collection", schema)

export default userModel;