import express from 'express';
const route = express.Router();
import { createUser, deleteUser, findUser, updateUser, user } from "../controller/controller.js" 

//Method of API only get method api is fetch by  browser
route.get("/", findUser);

route.get("/user/:id", user);

route.post("/create", createUser);

route.put("/update/:id", updateUser);

route.delete("/delete/:id", deleteUser);

// route.patch("/");






export default route;