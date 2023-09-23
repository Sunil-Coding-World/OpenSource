import { Course } from "../models/Course.js";

export const getAllcourses = async (req, res, next) => {
  try {
    const course = await Course.find();
    res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

export const createCourse = async (req, res, next) => {
  try {
    const { tittle, description, instructor, imageUrl, syllabus, roadmap } = req.body;
    
    // Create a new course
    const newCourse = await Course.create({
      tittle,
      description,
      instructor,
      imageUrl,
      syllabus,
      roadmap,
    });
    
    res.status(201).json({
      success: true,
      message: "Course created successfully",
      course: newCourse, // You may choose to send back the newly created course
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};



export const getCourseById = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);
    
    if (!course) {
      return res.status(404).json({
        success: false,
        error: "course not found",
      });
    }

    res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};