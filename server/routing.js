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




const express =require("express")
const app = express()
const port = 8000;
app.get("/",(req,res)=>{
    res.send( 'Home page')
})
app.get("/about",(req,res)=>{
    res.send('<h1> about page</h1>')
})
app.get("/contact",(req,res)=>{
    console.log(req.query); // it is a object for getting data
    // res.send('<h1> contact page</h1>')
    res.send(`<h1> contact page</h1>
        <h2>Name :${req.query.name}</h2>
        <h2>email :${req.query.email}</h2>
        <h2>phone :${req.query.phone}</h2>
        ` )
})
// app.get("/profile",(req,res)=>{
//     res.send('<h1> 404 page not found </h1>')
// })


app.get("/profile/:name/:email/:phone/:dsg",(req,res)=>{
    console.log(req.params);
    res.send(`<h2>Name :${req.params.name}</h2>
        <h2>email :${req.params.email}</h2>
        <h2>phone :${req.params.phone}</h2>
        <h2>dsg :${req.params.dsg}</h2>
        ` )
})

app.listen(port, ()=>{
    console.log(`server is running at loacalhost:${port} ..`)
})


//In node we use request parameter 