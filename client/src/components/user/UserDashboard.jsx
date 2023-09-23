import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInuser } from '../auth/authSlice';
import { useEffect } from 'react';
import { deleteItemFromEnrollAsync, fetchItemsByUserIdAsync, selectAllItems } from '../enroll/enrollSlice';
import { toast } from 'react-toastify';


const UserDashboard = () => {
  const enrolledCourses = useSelector(selectAllItems);

  console.log(enrolledCourses)
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInuser);
  const userId = user.id;

  const handleUnenroll = async (courseId) => {
    try {
      const response = await dispatch(deleteItemFromEnrollAsync({ userId, courseId }));
      if (response) {
        // If unenrollment is successful, display a success toast
        toast.success('Course unenrolled suCccessfully', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      // Handle any errors and display an error toast
      toast.error('An error occurred while unenrolling from the course', {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(fetchItemsByUserIdAsync(userId));
  }, [dispatch]);

    return (
      <div className="dashboard">
        <h1>Your Enrolled Courses</h1>
        <div className="courses">
          {enrolledCourses && enrolledCourses.map((course) => (
            <div className="course" key={course.id}>
              <img src={course.imageUrl} alt={course.tittle} />
              <div className="course-details">
                <h2>{course.tittle}</h2>
                <p>{course.description}</p>
                <p>Instructor: {course.instructor}</p>
              </div>
              <button className='unenroll' onClick={() => handleUnenroll(course.id)}>
                UnEnroll
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default UserDashboard;
    