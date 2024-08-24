import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    mobile: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required:true
    },
    cpass: {
        type: String,
        required:true
    },
}, {timestamps: true})

const userModel = mongoose.model("user",schema);

export default userModel