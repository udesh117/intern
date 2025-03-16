import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setJob(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load job details.");
        setLoading(false);
      });
  }, [id]);

  const handleApply = () => {
    setApplying(true);
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      jobId: id,
      userId: 123,
      message: "Applying for this job",
    }).then((response) => {
      alert("Application submitted successfully!");
      console.log("Application Response:", response.data);
    }).catch((error) => {
      alert("Failed to apply for job.");
      console.error("Application Error:", error);
    }).finally(() => {
      setApplying(false);
    });
  };

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="job-details-container">
      <h2>{job.title}</h2>
      <p>{job.body}</p>
      <button onClick={handleApply} disabled={applying}>
        {applying ? "Applying..." : "Apply Now"}
      </button>
    </div>
  );
};

export default JobDetails;
