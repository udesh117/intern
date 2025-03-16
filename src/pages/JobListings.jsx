import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/JobListings.css";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // First, try to fetch jobs from local `jobs.json`
    fetch("/jobs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load local job data.");
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data);
      })
      .catch(() => {
        console.warn("Local jobs.json not found, fetching from API...");
        // If local JSON fails, fetch from API
        axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            const apiJobs = response.data.slice(0, 10).map((job) => ({
              id: job.id,
              title: job.title,
              company: "XYZ Corp",
              location: "Bangalore"
            }));
            setJobs(apiJobs);
          })
          .catch((error) => {
            console.error("Error fetching jobs from API:", error);
            setError("Failed to load job listings.");
          });
      });
  }, []);

  return (
    <div className="job-listings-container">
      <h1>Job Listings</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id} className="job-card">
              <h2>{job.title}</h2>
              <p>Company: {job.company}</p>
              <p>Location: {job.location}</p>
              <p>salary: {job.salary}</p>
              <Link to={`/job/${job.id}`} className="view-details">View Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobListings;
