import UserModel from '../model/user.model.js';

// import UserModel from "../model/user.model";


export const home = async(req, res) => {
        //   res.send("hello world");

    const data = await UserModel.find()
    res.status(200).json({message: "data found", data: data});
    

    if(!data){
        res.status(404).json({message: "User not found"})
    }
};

export const createUser = async (req, res) => {
    const {name , email, mobile, password, confirmPassword} = req.body;
try{

    if(name && email && mobile && password && confirmPassword) {
        if(password !== confirmPassword){
            res.status(400).json({message: "password doesn't match", status: "failed"});
        }else{
            const data = new UserModel({
                name: name,
                email: email,
                mobile: mobile,
                password: password,
                confirmPassword: confirmPassword,
            });

            const sendUser = await data.save();
            if(sendUser){
                res.status(201).json({message: "data sent", data: sendUser});
            }else{
                res.status(400).json({message: "unable to save user ", status: "failed"});
            }
        }

    }else {
        res.status(400).json({message: "all fields require", status: "failed"});
    }
    }catch(error){
        console.log(error)
        res.status(400).json({message: err.message, status: "failed"});
    }
    
    // res.send("create user");

}