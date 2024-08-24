import userModel from "../model/model.js";
import "dotenv/config";
import jwt from "jsonwebtoken";

export const findUser = async(req, res) => {

try{
    const user = await userModel.find();
    if (user) {
        res.status(202).json({ status: "success", user});
    }else{
        res.status(404).json({status: "failed" , message: "data not found"});
    }

} catch (err) {
     res.status(500).json({status: "failed"});
}
};


// *****Post method*********

export const createUser = async (req, res) => {
    try{    
           const {name, email, mobile, password, cpass} =req.body;

           if((name && email && mobile && password &&cpass)){

        const existsEmail = await userModel.findOne({ email: email});

        if(existsEmail){
            res.status(500).json({status: "failed" , message:"user already exists"});

        }else{
            if(password !== cpass){
                res.status(500).json({status: "failed" , message:"password doesnt match"});

            }else{
               const user = new userModel({
                name: name,
                email: email,
                mobile: mobile,
                password: password,
                cpass: cpass,
               });
            const data = await user.save();
            console.log(data);
            const userId = await userModel.findOne({ email: email});

            const token = jwt.sign({userId: userId._id}, process.env.TOKEN, {expiresIn: "7h"});

            res.status(201).json({status: "success", data: data, token: token});
            }
        }

           }else{
            res.status(500).json({status: "failed", message: "all fields require"});
           }

        }catch (err) {
            res.status(500).json({status: "failed", message:"internal error"});
       }
         
}


// ! Find specific user;

// when we provide  data  from header server recive thi data in query or params format
//  query ? 4578658
//  params/abc=4578963

export const user = async (req, res) => {
    // const id = req.query.id;
    const id = req.params.id;

    try{
        const findPerson = await userModel.findById(id);
    if(findPerson) {
        res.status(200).json({status: "sucess", message: findPerson });
    }else{
        res.status(400).json({status: "failed", message:"cant find user "}); 
    }
    }catch(err){
        res.status(500).json({status: "failed", message:"internal error"});
    }
};


/// update user using put 

// export const  updateUser = async (req, res) =>{
//      const id = req.params.id;
//      const user = req.body;
//      try{
//         const {name,email,mobile,password} = req.body
//          const updateUser = await userModel.findByIdAndUpdate(id, user);
//          if(updateUser){
//             res.status(200).json({status: "success", message: updateUser});

//          }else{
//             res.status(400).json({status: "failed", message:"uable to update user "}); 
//          }

//      }catch(err){
//         res.status(500).json({status: "failed", message:"internal error"});
//      }
// };




export const  updateUser = async (req, res) =>{
    const id = req.params.id;
    const user = req.body;

    try{
       const {name,email,mobile,password} = req.body
       
       if(name && email && mobile && password) {
        const updateUser = await userModel.findByIdAndUpdate(id, {
            name: name,
            email: email,
            mobile: mobile,
            password: password,
        });

        if(updateUser){
            res.status(200).json({status: "success", message: updateUser});
        }

       }else{
        res.status(400).json({status: "failed", message:"unable to update"});
       }
    }catch(err){
        res.status(500).json({status: "failed", message:"error server"});

    }
}



// delete user

export const  deleteUser = async (req, res) =>{
    const id = req.params.id;
    

    try{
       const user = await userModel.findByIdAndDelete(id);
       
    if(user){
            res.status(200).json({status: "success", message: "deleteUser"});
       }else{
        res.status(400).json({status: "failed", message:"unable to delete"});
       }
    }catch(err){
        res.status(500).json({status: "failed", message:"error server"});

    }
}

