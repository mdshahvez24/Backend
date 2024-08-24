
// 21/5/2024

// OS Module----------

// const os = require('os');
// console.log(os.userInfo());

//Express Module----

// const express = require("express");
// console.log(express)

// Path module----------

// const path = require("path")
// console.log(path)

// http Module -------------

// const http = require("http");
// console.log(http);

// How to create Server-----

// const http = require("http");
// const server = http.createServer(()=>{
// });

// server.listen(8585, ()=>{
//     console.log("server on")
// })

// how to server request and response

// const http = require("http");
// const server = http.createServer((req, res)=>{
//     // res.write("hello server");     
//     // res.end();     
//     res.end("hllo bhai");     
//     console.log(req.headers);

// });

// server.listen(8585, ()=>{
//     console.log("server is running on http://localhost:8585")
// })


// How to show file to client 


// const express = require("express");

// const app = express();
// const port = 8585;
// const path = require("path");
// const fs = require("fs");

// mkdirSync() : used to create a folder

// fs.mkdirSync("sample")

// rmdirSync() : used to delete a folder
//  try{
// fs.rmdirSync("sample")
// console.log("deleted")
//  }
//  catch(error){
//     console.log("no such folder");
//  }

/*
writeFileSync() : create a new file if file doesn't exist, and if file already exist
it delete all content of file and re-write data into it  */

// try{
//     fs.writeFileSync("sample/mytext.txt",(" I am a devloper1\n "))
//     fs.writeFileSync("sample/mytext.txt",(" I am a devloper2\n "))
//     fs.writeFileSync("sample/mytext.txt",(" I am a devloper3\n "))
//     fs.writeFileSync("sample/mytext.txt",(" I am a devloper4\n "))
//     console.log("Record is Created !!");
// }
// catch(error){
//     console.log("Invalid Path !!!!");
// }


/*
appendFileSync() : create a new file if file doen't exist, and if file already exist
it write data after old data */

// try{
//     fs.appendFileSync("sample/mytext.txt",(" I am a devloper1\n "))
//     fs.appendFileSync("sample/mytext.txt",(" I am a devloper2\n "))
//     fs.appendFileSync("sample/mytext.txt",(" I am a devloper3\n "))
//     fs.appendFileSync("sample/mytext.txt",(" I am a devloper4\n "))
//     console.log("Record is Created !!");
// }
// catch(error){
//     console.log("Invalid Path !!!!");
// }


/*
readFileSync() : read a file and return data 
if we not use any encoding then data is return in buffer format
to encode use 'utf-8' or 'utf-16' or 'utf-32 etc for read properly
 */
// try{
//   const data = fs.readFileSync("sample/mytext.txt","utf-8")
//     console.log(data)
// }
// catch(error){
//     console.log("Invalid Path File doesnt exists !!!!");}

//fs.renameSync() :   used to rename a file

// try{
//    fs.renameSync("sample/mytext.txt","sample/sampletext.txt")
//     console.log("File name is change  !!");
// }
// catch(error){
//     console.log("Invalid Path !!!!");
// }

//fs.unlinkSync() : used to delete a file 

// try{
//     fs.unlinkSync("sample/sampletext.txt")
//     console.log("File deleted !!");
// }
// catch(error){
//     console.log("Invalid Path !!!!");




// const http = require("http");
// const path = require("path");
// const fs = require("fs");

// // const dir =path.dirname(path.join(), "./index.html")

// const index = fs.readFileSync("./index.html", "utf8");

// // 2nd way

// // const http = require("http");
// // const fs = require("fs");

// // const index = fs.readFileSync(
// //   "/Users/Prem/OneDrive/Desktop/Bakend/node/server/index.html",
// //   "utf8"
// // );

// const server = http.createServer((req, res) => {
//   res.end(index);
// });

// server.listen(8585, () => {
//   console.log("server is running on http://localhost:8585");
// });


// const http = require("http");
// // const path = require("path");
// const fs = require("fs");

// // const index = fs.readFileSync('/Users/mohd shahvez/OneDrive/Desktop/Backend/server/files/hlo.html', "utf-8"); 

// const index = fs.readFileSync('hlo.html', 'utf-8');
// const server = http.createServer((req, res) => {
//     res.end(index);
// });
// server.listen(8585, () => {
//     console.log("server is running on http://localhost:8585");
//   });



// 22/04/2024

// ###   Routing in Node ###//

// const http = require("http")

// const server = http.createServer((req,res)=>{
//     if(req.url=="/")
//     res.end("<h1>This is home page<h1>")
//     else if(req.url=="/about")
//     res.end("<h1>This is about page<h1>")
//     else if(req.url=="/contact")
//     res.end("<h1>This is contact page<h1>")
//     else
//     res.end("<h1>404 page not found<h1>")
// })
// server.listen(8000,()=>{
//     console.log("Server is Running AT PORT 8000...")
// })

// Routing with switch case

// const http = require("http");
// const port = 8585;
// const server = http.createServer((req, res)=>{
//     switch (req.method, req.pipe, req.url) {
//         case "/": 
//         res.end("welcome");
//         console.log(req.method,req.url);
//         break;

//         case "/api":
//             res.end("post api");
//             break;

//         case "/put":
//             res.end("put api");
//             break;

//         case "/delete":
//             res.end("delete api");
//             break;

//             default:
//                 res.end("unknown method");
//     }
// })

//   server.listen(port, ()=> console.log(`server is running on http://localhost:${port}`));


//Create file or remove directry-----------

// import express from 'express';

// const app = express();
// const port = 8585;
// import fs from "fs"
// // import path from "path";


// fs.writeFileSync("abc.html","hello world");
// // fs.unlinkSync("abc.html");
// app.listen(port, ()=>{
//   console.log(`server running on http://localhoast${port}`);
// })


//Create  or delete file inside a folder ---------------/

// const express = require("express");

// const app = express();
// const port = 8585;
// const path = require("path");
// const fs = require("fs");

// //create file
// // fs.writeFileSync("abc","hello worlddddd"); 

// // delete file
// // fs.unlinkSync("abc");

// //create file in image folder path.join join directry and folder

// const dir = path.join(__dirname, "images");
// const file = fs.writeFileSync(`${dir}/first1.html`, "hi world");

// app.listen(port, ()=>{
//       console.log(`server running on http://localhoast${port}`);
//     })
    

//  Name of directory or file ----------

// const express = require("express");

// const app = express();
// const port = 8585;
// const path = require("path");
// const fs = require("fs");

// // console.log(__dirname);
// // console.log(__filename);

// // create 10 txt file

// const dir = path.join(__dirname, "files");

// for(i = 0; i <= 10; i++){
//     fs.writeFileSync(`${dir}/file${i}.text`, "hello i m the node ")
// }

// // remove file from  files

// // for(i = 0; i <= 10; i++){
// //     fs.unlinkSync(`${dir}/file${i}.text`);
// // }

// app.listen(port, ()=>{
//     console.log(`server running on http://localhoast${port}`);
//   })


// const express = require("express");

// const app = express();
// const port = 8585;
// const path = require("path");
// const fs = require("fs");
 
// console.log(process);  //system details
// console.log(process.argv);  //path and file name

// app.listen(port, ()=>{
//     console.log(`server running on http://localhoast${port}`);
//   })


// Input  file from terminal

// const express = require("express");

// const app = express();
// const port = 8585;
// // const path = require("path");
// const fs = require("fs");
 


// const input = process.argv;
// console.log(input);

// // create 
// // if(input[2] === "add"){
// //     fs.writeFileSync(input[3], input[4]);
// // };

// //remove
// if(input[2] === "remove"){
//     fs.unlinkSync(input[3]);
// };

// app.listen(port, ()=>{
//     console.log(`server running on http://localhoast${port}`);
//   })


// how to rename a folder or directory


// const express = require("express");

// const app = express();
// const port = 8585;
// const path = require("path");
// const fs = require("fs");
 
// const dir = path.join(__dirname, "hlo")
// const d = fs.rename(dir, "files",(err, d)=> {
//     console.log(d);
// });

// app.listen(port, ()=>{
//     console.log(`server running on http://localhoast${port}`);
//   })


// !read directory----------- 23/05/24

// const express = require("express");
// const app = express();
// const port = 8585;
// const fs = require("fs");
// const path = require("path");

// const dir = path.join(__dirname, "images");

// fs.readdir(dir, (err, file) => {
//     console.log(file);
// });

// app.listen(port, () => {
//     console.log(`server running on http://localhoast${port}`);
//   });


// Dispaly to client----------- 23/05/24


// const express = require("express");
// const app = express();
// const port = 8585;
// const fs = require("fs");
// const path = require("path");


// const dir = path.join(__dirname, "images");

// const file = fs.readFileSync(`${dir}/first1.html`, "utf-8");

// const product = fs.readFileSync("db.json", "utf-8");
// console.log(product);


// // const data = product.products;


// app.get("api end point", (req, res)=>{callback function})


// app.get("/", (req, res) => {
//     res.send(file)
//     // res.write(file);
//     // res.end();
// });

// app.get("/data", (req, res) => {
//     res.send(data);
// })

// app.listen(port, () => {
//     console.log(`server running on http://localhost${port}`);
//   });




// const express = require("express");
// const app = express();
// const port = 8080;
// const fs = require("fs");
// const path = require("path");


// const dir = path.join(__dirname, "images");

// const index = fs.readFileSync(`${dir}/first1.html`, "utf-8");

// const product = JSON.parse(fs.readFileSync("db.json", "utf-8"));

// const data = product.products;
// // console.log(product);

// // app.get("/", (req, res) => {
// app.get("/:id", (req, res) => {
// //   const id = req.query.id;
//   const id = req.params.id;

//   const newProduct = data.find((item) => item.id === +id);

//   const newIndex = index
//     .replace("**title**", newProduct.title)
//     .replace("***description***", newProduct.description)
//     .replace("**price**", newProduct.price);

//   res.send(newIndex);
// });

// app.get("/data", (req, res) => {
//   res.send(data);
// });

// app.get("/product/:name", (req, res) => {
//   const name = req.params.name;
//   console.log(name);

//   res.send("hello world");
// });

// app.get("/about", (req, res) => {
//   const pass = req.query.pass;

//   if (pass !== "123") {
//     console.log("");
//     res.send("<h1>Please enter a valid password</h1>");
//   } else {
//     console.log(pass);
//     res.send("<h1>hello world</h1>");
//   }
//   //   console.log(name);
// });

// app.listen(port, () => {
//   console.log(`server listening on http://localhost:${port}`);
// });





// const dir = path.join(__dirname, "images");

// fs.readdir(dir, (err, files) => {
//   files.forEach((item) => {
//     console.log("file name is : " + item);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// !  file system
// 1. create file
// 2. create multiple file
// 3. create files in folder
// how to use path module
// how to fs module
// create file using terminal
//  rename file = const directory = path.join(__dirname, 'yourFolderName'); // Replace 'yourFolderName' with your actual folder name
// const oldFilename = 'oldFilename.txt';
// const newFilename = 'newFilename.txt';

// // Construct the full paths
// const oldPath = path.join(directory, oldFilename);
// const newPath = path.join(directory, newFilename);

// // Use fs.rename to rename the file
// fs.rename(oldPath, newPath, (err) => {
//   if (err) {
//     console.error('Error renaming the file:', err);
//   } else {
//     console.log('File renamed successfully');
//   }

// ! rename folder
// const oldFolderPath = path.join(__dirname, 'a'); //
// const newFolderPath = path.join(__dirname, 'b'); //

// fs.rename(oldFolderPath, newFolderPath, (err) => {
//   if (err) {
//     console.error('Error renaming the folder:', err);
//   } else {
//     console.log('Folder renamed successfully');
//   }
// });

// ! read directory

// const dir = path.join(__dirname, "images");

// fs.readdir(dir, (err, files) => {
//   files.forEach((item) => {
//     console.log("file name is : " + item);
//   });
// });

// ! send data dynamically

// const express = require("express");
// const app = express();
// const port = 8585;
// const path = require("path");
// const fs = require("fs");

// const data = JSON.parse(fs.readFileSync("./db.json", "utf8"));

// const product = data.products;
// const dir = path.join(__dirname, "images");
// const index = fs.readFileSync(`${dir}/index.html`, "utf8");

// app.get("/", (req, res) => {
//   const id = +req.query.id;

//   const newProduct = product.find((item) => item.id === id);
//   const changeData = index.replace("**hello world**", newProduct.title);
//   res.send(changeData);
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// const obj = {
//   p: [
//     {
//       name: "abc",
//       email: "abc@example.com",
//       mobile: 5465454,
//       pass: "password",
//     },
//   ],
// };

// console.log(obj);

// console.log(JSON.parse(obj));
// const d = JSON.stringify(obj);
// console.log(d);
// console.log(obj);


// readfile  with call back

// const fs = require("fs")

// // fs.writeFileSync("./public/index.html", "hllo wold");

// fs.readFile("index.html", "utf-8", (err, data) => {
//     if(data) {
//         console.log(data)
//     }
// });
