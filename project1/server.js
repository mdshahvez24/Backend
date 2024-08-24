import express from "express";
const app = express();
import 'dotenv/config';
import morgan from 'morgan';
import bodyParser from "body-parser";

const port = process.env.PORT;

// middleware

app.use (bodyParser.urlencoded({extended: true })); // body pasrser can deal with data form

app.use(bodyParser.json());
app.use(morgan("combined"))

// db connection 
import db from './services/database/db.js';
db();
//model connection or schema

//set ejs
app.set("view engine", "ejs");


// api route
 import route from "./services/routes/routes.js";
 app.use("/api/v1", route);


app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
})