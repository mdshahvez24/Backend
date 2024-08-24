import  "dotenv/config";
import mongoose from "mongoose";

const conString = process.env.DB;
if(!conString) throw new Error ("No database connection string found ");

const db = () => {
    if(conString){
        const conn = mongoose.connect(conString);

        if (conn){
            console.log("connected to mongoDB");
        }else{
            console.log("cannot connect to mongoose")
        }
    }
};

export default db;
