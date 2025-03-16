import React from "react";
import "../styles/AboutUs.css"; // Import CSS for styling

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Job Portal</strong>, your trusted platform for finding exciting career opportunities. 
        We are dedicated to connecting talented professionals with top companies across various industries. 
        Whether you're a fresher searching for your first job or an experienced professional looking for new challenges, 
        our platform provides a seamless and efficient job search experience.
      </p>
      <p>
        With a vast collection of job listings in fields like IT, Engineering, Finance, Marketing, and more, 
        we make it easier for job seekers to explore opportunities that match their skills and aspirations. 
        Our user-friendly interface allows you to apply for jobs with just a few clicks, while real-time updates 
        keep you informed about the latest openings and application statuses.
      </p>
      <p>
        At <strong>Job Portal</strong>, we believe in making job searching hassle-free, ensuring that you can focus on what truly matters—building your career. 
        Join thousands of job seekers who have successfully found their dream jobs with us. 
        <strong>Your journey to success starts here!</strong>
      </p>
    </div>
  );
};

export default AboutUs;
