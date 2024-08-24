import userModel from '../model/model.js';


export const home = async (req, res) => {
    const data = await userModel.find()
    console.log(data)
 res.render("home", {
    data: data
 });
};

export const add =  async (req, res) => {
 res.render("addUser");

};

export const update =  async (req, res) => {
 res.render("updateUser");

};

export const addUser = async (req, res) => {
    const {name, email, mobile} = req.body;
    try{
        const data = new userModel({
            name: name,
            email: email,
            mobile: mobile,
        });

      await data.save();
      res.status(201).json({message: "success", data: data });
      console.log(data)
    }catch(err){
        res.status(400).json({message: err.message});
    }
};

