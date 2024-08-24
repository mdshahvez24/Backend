import express from 'express';
import {add, addUser, home, update} from "../controller/controller.js" 

const routes = express.Router();

//! get method api

routes.get("/", home);
routes.get("/add", add);
routes.get("/update", update);

// post method api

routes.post("/add", addUser);
// routes.post("/createuser", addUser);

export default routes;