// console.log("hlo 3/06/2024")

import express from "express";
import "dotenv/config";
const app= express();
import morgan from "morgan";
const port = process.env.PORT || 3000;
// import fs from "fs";


// !  streaming logs

// const data = fs.createWriteStream("./utils/logs/config.txt", "utf-8", {
// flags: "a",
// });

// ! middleware 

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(morgan("combined"));
// app.set("view engine", "ejs");  

// ! database connection

import db from "./utils/db/db.js";
db();

// ! api here
import route from "./utils/routes/routes.js";
app.use("/api/v1", route);

app.post("/createUser", async(req, res) => {
    
})

// app.post("/createUser", async(req, res)  => {
//     const {name, email} = req.body;

//   if(name && email){

// }

//     const data = new UserModel({
//         name: name,
//         email: email,
//     })
//    const d =  await data.save();

//     res.status(201).json({
//         messaage: "user created successfully",
//         result: d,
//     });
// }
// }

import UserModel from "../model/user.model.js";

    


app.listen(port, () => {
    console.log(`server running at http://localhost:${port}/`);
})



















