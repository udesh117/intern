import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; 
import "../styles/Home.css"; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    
      <div className="button-container">
        <button className="view-jobs-button" onClick={() => navigate("/jobs")}>
          View Jobs
        </button>
      </div>
    </div>
  );
};

export default Home;
