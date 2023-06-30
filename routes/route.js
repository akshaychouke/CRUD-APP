import express from "express";
import {addUser} from "../controllers/UserController.js"
const router = express.Router();

router.post("/add",addUser);

export default router;
