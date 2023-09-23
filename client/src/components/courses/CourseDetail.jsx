import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchAllCourseByIdAsync, selectAllCourse } from "./courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseById } from "./courseApi";


  function CourseDetail() {
    const { id } = useParams();
    const [courseData, setCourseData] = useState({});
    const [readMore, setReadMore] = useState(false);
  
    useEffect(() => {
      // Define an async function to fetch the course data by ID
      const fetchCourseById = async () => {
        try {
          const response = await fetch(`http://localhost:8000/course/${id}`);
  
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
  
          const data = await response.json();
  
          if (data.success) {
            setCourseData(data.course);
          } else {
            console.error(data.error);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
  
      // Call the fetchCourseById function to fetch the course data
      fetchCourseById();
    }, [id]);
  
    const toggleReadMore = () => {
      setReadMore(!readMore);
    };

  return (
    <mainbox>
      <div className="mainCourse">
        <div>
          <h5>{courseData.tittle}</h5>
        </div>
        <main>
          <h2>Syllabus</h2>
          <ul>
            {courseData.syllabus &&courseData.syllabus.slice(0, readMore ? undefined : 3).map((e, index) => (
              <li key={index}>
                <h3>{e.week}</h3>
                <ul>
                  {e.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          {courseData.syllabus && courseData.syllabus.length > 3 && (
            <button className="read-more" onClick={toggleReadMore}>
              {readMore ? "Read Less" : "Read More"}
            </button>
          )}

          <h2>Course Roadmap</h2>
          <ul>
            {courseData.roadmap && courseData.roadmap.slice(0, readMore ? undefined : 3).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {courseData.roadmap && courseData.roadmap.length > 3 && (
            <button className="read-more" onClick={toggleReadMore}>
              {readMore ? "Read Less" : "Read More"}
            </button>
          )}
        </main>
        <button className="enroll">Enroll Now</button>
      </div>
    </mainbox>
  );
}


export default CourseDetail
