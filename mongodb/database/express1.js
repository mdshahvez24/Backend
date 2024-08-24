import express from 'express';
const app = express();
const port = 8585;

app.listen(port, ()=>{
  console.log(`server running on http://localhoast${port}`);
})









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


// How to send a file to server 


// const http = require("http");
// const fs = require("fs");

// const index = fs.readFileSync("./index.html", "utf8");

// // const http = require("http");
// // const fs = require("fs");

// // const index = fs.readFileSync(
// //   "/Users/Prem/OneDrive/Desktop/Bakend/node/server/hello.html",
// //   "utf8"
// // );

// const server = http.createServer((req, res) => {
//   res.end();
// });

// server.listen(8585, () => {
//   console.log("server is running on http://localhost:8585");
// });


// 22/04/2024

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
// // import fs from "fs"
// import path from "path";


// // fs.writeFileSync("abc.html","hello world");
// // fs.unlinkSync("abc.html");
// app.listen(port, ()=>{
//   console.log(`server running on http://localhoast${port}`);
// })


//Create  or delete file inside a folder ---------------

// const express = require("express");

// const app = express();
// const port = 8585;
// const path = require("path");
// const fs = require("fs");


// const dir = path.join(__dirname, "File");
// const file = fs.writeFileSync(`${dir}/first1.html`,"hi world");

// // fs.unlinkSync(`${dir}/first.html`);

// app.listen(port, ()=>{
//       console.log(`server running on http://localhoast${port}`);
//     })
    
//  Name of directory or file ----------

// const express = require("express");

// const app = express();
// const port = 8585;
// const path = require("path");
// const fs = require("fs");

// console.log(__dirname);
// console.log(__filename);

//create 10 txt file

// const dir = path.join(__dirname, "File");

// // for(i = 0; i <= 10; i++){
// //     fs.writeFileSync(`${dir}/file${i}.text`, "hello i m the node ")
// // }

// // remove file from 

// for(i = 0; i <= 10; i++){
//     fs.unlinkSync(`${dir}/file${i}.text`);
// }

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


// Input 

// const express = require("express");

// const app = express();
// // const port = 8585;
// // const path = require("path");
// const fs = require("fs");
 


// const input =process.argv;
// // console.log(input);

// if(input[2] === "add"){
//     fs.writeFileSync(input[3], input[4]);
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
 
// const dir = path.join(__dirname, "File")
// const d = fs.rename(dir, "hello",(err, d)=> {
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
// const port = 3500;
// const fs = require("fs");
// const path = require("path");


// const dir = path.join(__dirname, "images");

// const file = fs.readFileSync(`${dir}/index.html`, "utf-8");

// const product = JSON.parse(fs.readFileSync("db.json", "utf-8"));

// const data = product.products;

// app.get("/", (req, res) => {
//     res.send(file);
// })

// app.get("/", (req, res) => {
//     res.send(data);
// })


// app.listen(port, () => {
//     console.log(`server running on http://localhoast${port}`);
//   });




// const express = require("express");
// const app = express();
// const port = 8585;
// const fs = require("fs");
// const path = require("path");


// const dir = path.join(__dirname, "images");

// const index = fs.readFileSync(`${dir}/index.html`, "utf-8");

// const product = JSON.parse(fs.readFileSync("db.json", "utf-8"));

// const data = product.products;
// // console.log(product);

// app.get("/", (req, res) => {
//   const id = req.query.id;

//   const newProduct = data.find((item) => item.id === +id);

//   const newIndex = index
//     .replace("**title**", newProduct.title)
//     .replace("**description**", newProduct.description)
//     .replace("**price**", newProduct.price);

//   res.send(newIndex);
// });

// app.get("/data", (req, res) => {
//   res.send(data);
// });


// app.listen(port, () => {
//     console.log(`server running on http://localhoast${port}`);
//   });




