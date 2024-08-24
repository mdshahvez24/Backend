// console.log("hlo world 28/05/24") 

// !database connection

import express from 'express';
const app = express();
import "dotenv/config"
import bodyParser from 'body-parser';
import morgan from "morgan";

//Middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined")); //Make logs time tell
// app.use(morgan("tiny"));

const port = process.env.PORT || 8585;

// !database connection
import db from './services/database/db.js';
db();

//   !API's here
import route from './services/routes/routes.js';
app.use("/api/v1/", route);

app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`);
});


