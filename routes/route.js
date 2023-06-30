import express from "express";
import {
  addUser,
  getAllUsers,
  getUser,
  editUser,
} from "../controllers/UserController.js";
const router = express.Router();

router.post("/add", addUser);
router.get("/all", getAllUsers);
router.get("/:id", getUser);
router.post("/:id", editUser);
export default router;
