// static  website

const express = require("express")
const app = express()

app.use(express.static("./sample"))

app.listen(8000,()=>console.log("server is running at port 8000"))