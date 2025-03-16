import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/JobApplication.css";

const JobApplication = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    resume: null,
    resumeLink: "",
    coverLetter: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    resume: "",
    coverLetter: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: event.target.files[0],
    }));
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.fullName) {
      errors.fullName = "Full Name is required.";
      isValid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.resume) {
      errors.resume = "Resume is required.";
      isValid = false;
    }

    if (!formData.coverLetter) {
      errors.coverLetter = "Cover letter is required.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleApply = () => {
    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    const newApplication = {
      ...formData,
      jobTitle: "Frontend Developer", // Replace with actual job title
      company: "Tech Corp", // Replace with actual company
      location: "Bangalore", // Replace with actual location
      status: "Under Review", // Initial status
      resumeFileName: formData.resume ? formData.resume.name : "No file uploaded",
    };

    // Save to local storage
    const storedApplications = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    localStorage.setItem("appliedJobs", JSON.stringify([...storedApplications, newApplication]));

    alert("Application submitted successfully!");

    // Redirect to Applied Jobs page
    navigate("/applied-jobs");
  };

  return (
    <div className="job-container">
      <h2>Apply for Job</h2>

      <input 
        type="text" 
        name="fullName" 
        placeholder="Full Name" 
        className="input-field" 
        value={formData.fullName} 
        onChange={handleInputChange} 
      />
      {errors.fullName && <p className="error">{errors.fullName}</p>}

      <input 
        type="email" 
        name="email" 
        placeholder="Email Address" 
        className="input-field" 
        value={formData.email} 
        onChange={handleInputChange} 
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <div className="file-drop">
        <label htmlFor="resume-upload" className="drop-zone">
          Drop or Click to Upload Resume
        </label>
        <input
          type="file"
          id="resume-upload"
          className="file-input"
          onChange={handleFileChange}
        />
        {formData.resume && <p className="file-name">{formData.resume.name}</p>}
        {errors.resume && <p className="error">{errors.resume}</p>}
      </div>

      <input 
        type="text" 
        name="resumeLink" 
        placeholder="Resume Link (Google Drive, GitHub, etc.)" 
        className="input-field" 
        value={formData.resumeLink} 
        onChange={handleInputChange} 
      />

      <textarea 
        name="coverLetter" 
        placeholder="Write your cover letter here..." 
        className="textarea"
        value={formData.coverLetter} 
        onChange={handleInputChange}
      ></textarea>
      {errors.coverLetter && <p className="error">{errors.coverLetter}</p>}

      <button className="apply-button" onClick={handleApply}>
        Apply Now
      </button>
    </div>
  );
};

export default JobApplication;
