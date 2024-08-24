import mongoose from "mongoose";

const schema = new mongoose.Schema({

    name: {
        type: String,
        required: true,    
    },
    email: {
        type: String,
        required: true,   
    },
    mobile: {
        type: String,
        required: true,    
    },
    password: {
        type: String,
        required: true,    
    },
    confirmPassword: {
        type: String,
        required: true,    
    }  
}, {timestamps: true})


const UserModel = mongoose.model("user",schema); //user is a name of collection creat itself 

export default UserModel;