import express from 'express';
const route= express.Router();
import {home} from "../controller/controller.js" 

route.get("/data",home);

export default route;