import mongoose from "mongoose";
import  "dotenv/config";

const conString = process.env.DB;
if(!conString) throw new Error ("No database connection string found ");

const db = () => {
    const connection = mongoose.connect(conString);
   

        if (connection){
            console.log("connected to mongoDB");
        }else{
            console.log("cannot connect to mongoose")
        }
    }

export default db;
