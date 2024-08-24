// 1. import { MongoClient } from "mongodb";
// 2.ConnectionString
// 3. client
// 4. db from client 
// 5. db.collection

// 20/5/24

// console.log(' hello making conection to online mongodb time 20/5/24')


// const {MongoClient} = require("mongodb");

// const ConnectionString = "mongodb+srv://mdshahvez24:Miet@1234@cluster0.ksp6ayx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// if (!ConnectionString) throw new Error("ConnectionString is missing");

// const database = async()=>{
//     try{

//         const client = new MongoClient(ConnectionString)


// if(!client) {
//     console.log('cannot create the client');
// } else {
//     const db = client.db("mernstack");

// const collection = await db.createCollection("student");

// if(collection){

//     //senddata to database

// let data = {
//     name: 'abc',
//     email: 'abc@gmail.com',
//     mobile: 456789
// };

// const sendData = await collection.insertOne(data);
// if(sendData){
//     console.log("data Inserted successfully");

//     const findData = await collection.find().toArray()
//     console.log(findData)

// }else{
//     console.log("Failed to insert data")
// }

//     console.log("connected to mongodb");
// }else {
//     console.log("failed connection to mongodb");
// }

// }

// }catch(err) {
//     console.log("error",err);
// }
// }
// database()


// ----------connecting to local database ------------

// import { MongoClient } from "mongodb";

const {MongoClient} = require("mongodb")

const ConnectString = "mongodb://localhost:27017";

if(!ConnectString) throw new Error ("Missing connection String");

const connection = async ()=>{
const client = new MongoClient(ConnectString);
     if(!client){
        throw new Error("unable to create connection")

     }else{
          
       const db = client.db("helloMongoDB");
            const collection = db.createCollection("user2")
            if(!collection){
                throw new Error("unable to create tabel collection")
            }else{
                let data = {
              name: 'abc',
              email: 'abc@gmail.com',
              mobile: 456789
             };
      const sendData = (await collection).insertOne(data);
      if(sendData){
        console.log("data sent successfully");
      }else{
        throw new Error("unable to create table collection");
      }

                console.log("collection created");
            }

         console.log("connection to mongoDB")
     }
}
connection();