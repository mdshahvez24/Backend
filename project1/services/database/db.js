import mongoose from "mongoose";
import  "dotenv/config";

const conString = process.env.DB;

if(!conString) throw new Error ("No database connection string found ");

const db = async() => {
    const connection = await mongoose.connect(conString);

   

        if (connection){
            console.log("db connected ro mongodb");
        }else{
            console.log("cannot connect to mongodb")
        }
    
};

export default db;
