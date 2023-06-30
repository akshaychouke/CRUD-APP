import express from "express";
import {
  addUser,
  getAllUsers,
  getUser,
  editUser,
  deleteUser,
} from "../controllers/UserController.js";
const router = express.Router();

router.post("/add", addUser);
router.get("/all", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);
export default router;
