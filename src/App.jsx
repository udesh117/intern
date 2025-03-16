import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobListings from "./pages/JobListings";
import JobDetails from "./pages/JobDetails";
import JobApplication from "./pages/JobApplication";
import AppliedJobs from "./pages/AppliedJobs"; 
import About from "./pages/About"; 
import NotFound from "./pages/NotFound"; 
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/apply" element={<JobApplication />} />
        <Route path="/applied-jobs" element={<AppliedJobs />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
};

export default App;
