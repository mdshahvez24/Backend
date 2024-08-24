// console.log('19/06/24')  how to send data use post reqvst to mongodb using multer 



import express, { response } from "express";
const app = express();
import multer from "multer";
import mongoose from "mongoose";

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.set("view engine", "ejs");

// db connection
const str = mongoose.connect("mongodb://0.0.0.0/multerUpload");

if(str) {
    console.log("connected to  db");
}else {
    console.log("cannot connect")
}

// ! modal 
const schema = new mongoose.Schema({
    file: {
        type: String,
        unique: true, // this is use when payment ss save
    },
},
 {timestamps: true}
);

const Model = mongoose.model("upload", schema);

app.get('/', (req, res) => { 
    res.render("index")
    // res.send("hello world");
    // res.send("<h1>hello world</h1>");
});

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//     return cb(null, "./images")}, 

//     filename: function (req, file, cb) { return cb (null, Date.now() + "_" + file.originalname)       
//     }
// })


// !upload file here 

const storage = multer.diskStorage({
    destination: function(a, b, cb){

        return cb(null, "./images")
    },

    filename: function(a, file, cb){
        return cb(null,file.originalname)
    }
});

const upload = multer({storage: storage});

 //single keyword - unique single file sent
app.post("/", upload.single("p"), (req, res) => {
    const file = req.file.filename;

    const data = Model({
        file: file,
    })
    data.save().then((response)=>{
        res.json({success: true, message: response});
    })
    .catch((err)=>{
        console.log(err);
        res.json({ success: false, message: err });
    });
});

app.listen(8000, () => {
    console.log(`server is running on http://localhost:8000`);
});
