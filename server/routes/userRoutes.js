import express from "express";
import { createUser, deleteUserById, findUserByEmail, getAllUsers, getUserById, updateUserById } from "../controllers/userController.js";

const router = express.Router()

router.route("/users").get(getAllUsers);
router.route("/users/:id").get(getUserById);
router.route("/users").post(createUser);
router.route("/users/:id").put(updateUserById);
router.route("/users/:id/enroll").put(deleteUserById);
router.route("/users/email/:email").get(findUserByEmail);

export default router;