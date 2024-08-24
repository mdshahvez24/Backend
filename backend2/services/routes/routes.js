import express from "express";
import { createUser } from "../controller/user.controller.js";

const route = express.Router();

route.post("/createUser", createUser);

export default route;