import express from "express";
import { createCourse, getAllcourses, getCourseById } from "../controllers/courseController.js";

const router = express.Router()

router.route("/course").get(getAllcourses);
router.route("/createcourse").post(createCourse);
router.route("/course/:id").get(getCourseById);

export default router;