import React from 'react';

const EnrollSuccess = () => {
  return (
    <div className="enrollmentSuccess">
      <div className="message">
        <h2>UnEnrollment Successful!</h2>
        <p>please visit more courses to enroll</p>
      </div>
      <a href="/courses">
        <button>Back to Courses</button>
      </a>
    </div>
  );
};

export default EnrollSuccess;
