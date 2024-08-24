// // console.log("hllo 30/05/2024")

import express from "express";
const app = express();
import "dotenv/config";
// import morgan from "morgan";
const port = process.env.PORT;

//! middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(morgan("combined")); 

app.set("view engine", "ejs");  

//! API'S

// app.get("/", (req, res)=>{
//     res.render("home");
// });

// app.get("/add", (req, res)=>{
//     res.render("addUser");
// });

// app.get("/update", (req, res)=>{
//     res.render("updateUser");
// });


// // database connection  
import db from './services/db/db.js'
import routes from "./services/routes/routes.js";
// db();

// // Api's

app.use("/api/v1", routes);

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});


