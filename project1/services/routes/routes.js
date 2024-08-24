import express from "express";
import { home } from "../controller/controll.js";

const route = express.Router();

route.get("/user", home);



export default route;

