import mongoose from "mongoose";
import 'dotenv/config';

const conString = process.env.DB;

if(!conString) throw new Error("missing connection string");

const db = async () => {
 const connection = await mongoose.connect(conString);

 if (connection) {
    console.log("connected to mongoDB")
 }else {
    console.log("cannot connet to mongodb")
 }
}

export default db;