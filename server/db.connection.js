// database connection  27/05/24

// import  express from "express";
// const app = express();
// import 'dotenv/config'; 
// import mongoose from "mongoose";
// const port = process.env.PORT;
// app.use(express.urlencoded({extended: true})); 
// app.use(express.json());

// const conString = process.env.DB;
// if(!conString) throw new Error ("No database connection string found ");

// const db = () => {
//     if(conString){
//         const conn = mongoose.connect(conString);

//         if (conn){
//             console.log("connected to mongoDB");
//         }else{
//             console.log("cannot connect to mongoose")
//         }
//     }
// };
// db();


// app.listen(port, ()=>{
//     console.log(`server running on http://localhost${port}`);
//   })






import  express, { Router } from "express";
const app = express();
import 'dotenv/config'; 
const port = process.env.PORT;

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

import db from "./utils/db/db.js";

app.set("view engine", "ejs");
app.get("/data", (req, res) =>{
    res.render("index");
});

app.listen(port, ()=>{
    console.log(`server running on http://localhost${port}`);
    db();
  });



  //! api's****

  import route from "./utils/routes/routes.js";
  app.use("api/v1", route)