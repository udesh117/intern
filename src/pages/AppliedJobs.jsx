import React, { useState, useEffect } from "react";
import "../styles/AppliedJobs.css";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(storedJobs);
  }, []);

  return (
    <div className="applied-jobs-container">
      <h1>Applied Jobs</h1>
      {appliedJobs.length === 0 ? (
        <p>No jobs applied yet.</p>
      ) : (
        <ul className="applied-job-list">
          {appliedJobs.map((job, index) => (
            <li key={index} className="applied-job-card">
              <h2>{job.jobTitle}</h2>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Email:</strong> {job.email}</p>
              <p>
                <strong>Resume:</strong>{" "}
                <a href={job.resumeLink} target="_blank" rel="noopener noreferrer" className="resume-link">
                  View Resume
                </a>
              </p>
              <p><strong>Cover Letter:</strong> {job.coverLetter || "Not provided"}</p>
              <span className={`status ${job.status.toLowerCase().replace(" ", "-")}`}>
                {job.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppliedJobs;
