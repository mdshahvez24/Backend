// 27/05/24

// Reading body

// const express = require("express");
// const cheerio = require('cheerio');

// const app = express();
// const port = 8585;
// const fs = require('fs')

// fs.readFile("abc.html", "utf-8", (err, data) => {
//   if (err) {
//     console.log("file not found");
//   } else {
//     const $ = cheerio.load(data);
//     const bodyContent = $("body").html();
//     console.log(bodyContent);
//   }
// });

// const express = require("express");

// const app = express();
// const port = 8585;
// const path = require("path");
// const fs = require("fs");

//create file
// fs.writeFileSync("abc","hello worlddddd"); 

// delete file
// fs.unlinkSync("abc");

//create file in image folder path.join join directry and folder

// const dir = path.join(__dirname, "images");
// const file = fs.writeFileSync(`${dir}/first.html`, "hi world");

// read directry 

// const dir =fs.readdirSync("./files")
// console.log(dir)



// app.listen(port, ()=>{
//       console.log(`server running on http://localhoast${port}`);
//     })


/// .env **********

// const express = require("express");
// const app = express();
// const fs = require('fs')
// require('dotenv/config'); 

// const port = process.env.PORT;

//     app.listen(port, ()=>{
//       console.log(`server running on http://localhoast${port}`);
//     })



import  express from "express";
const app = express();
import 'dotenv/config'; 

const port = process.env.PORT;
app.use(express.urlencoded({extended: true})); // use for post request api

app.get("/data", (req, res) =>{
  res.send("hlo world")
})

app.post("/sendUser", (req, res) => {
  const body = req.body();

//   // let obj = {
//   //   name: "abc",
//   //   email: "abc@gmail.com",
//   //   pass: 456987
//   // };

  if(body){
    res.send({message: "data sent", data: body});
  }else {
    res.send({message: "data not sent"});
  }
});


    app.listen(port, ()=>{
      console.log(`server running on http://localhoast${port}`);
    })