import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCourseAsync, selectAllCourse } from './courseSlice';
import {  checkUserAsync, selectLoggedInuser } from '../auth/authSlice';
import { AddtoEnroll } from './../enroll/enrollApi';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { AddtoEnrollAsync } from './../enroll/enrollSlice';
import { toast } from 'react-toastify';



const Courses = () => {

  const user = useSelector(selectLoggedInuser);
  const Navigate = useNavigate();

  const params = useParams();
  
  const courseData = useSelector(selectAllCourse);
  const dispatch = useDispatch()



  const handleEnroll = async (e, courseId) => {
    e.preventDefault();
    const newItem = { courseId, userId: user.id };
  
    try {
      // Dispatch the enrollment request
      await dispatch(AddtoEnrollAsync(newItem));
  
      // If enrollment is successful, display a success toast
      toast.success('Course enrolled successfully', {
        position: toast.POSITION.TOP_RIGHT,
      })
  
      // Optionally, you can navigate the user to a success page
      // Navigate("/success")
    } catch (error) {
      // Handle any errors, and display an error toast if needed
      toast.error('An error occurred while enrolling in the course', {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.error(error);
    }
  };
  
  useEffect(() => {
    dispatch(fetchAllCourseAsync())
  }, [])
  








    const options = {
      initial: { x: '-100%', opacity: 0 },
      whileInView: { x: '0', opacity: 1 },
    };
  
    return (
      <div className="coursebox">
        {courseData && courseData.map((course, index) => (
          <motion.div className="mainCourse" key={index} {...options} transition={{ delay: 0.5 }}>
            <div>{course.tittle}</div>
            <main>
              <a href={`/course-detail/${course.id}`} key={course.id}>
                <img src={course.imageUrl} alt={course.title} />
                <p>{course.description}</p>
                <h5>{course.instructor}</h5>
                <a href="/success">
                  <button onClick={(e) => handleEnroll(e, course.id)}>Enroll Now</button>
                </a>
              </a>
            </main>
          </motion.div>
        ))}
      </div>
    );
  };
  
export default Courses;
