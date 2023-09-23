import { Course } from "../models/Course.js";
import { User } from "../models/User.js";

export const fetchEnrollByUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userData = await User.findById(id , { courses: 1 })
    const courses = await Course.find({ _id: { $in: userData.courses } });
    res.status(200).json(courses);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const addToEnroll = async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.courses.includes(courseId)) {
      return res.status(400).json({ error: 'Course already enrolled' });
    }

    // If not already enrolled, add the course
    user.courses.push(courseId);
    await user.save();

    res.status(200).json({ msg: 'Enrolled' });
  } catch (err) {
    res.status(400).json(err);
  }
};





export const removeFromEnroll = async (req, res) => {
  const { id } = req.params;
  const { courseId } = req.params;
  try {
    await User.findByIdAndUpdate(id, {
      $pull: { courses: courseId }
    });
    res.status(200).json({ msg: "Course removed from enrollment" });
  } catch (err) {
    res.status(400).json(err);
  }
};

