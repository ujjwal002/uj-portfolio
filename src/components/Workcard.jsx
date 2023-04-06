import React from "react";
import "./Workcard.css";
import project1 from "../assets/project1.png";
const Workcard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={project1} alt="project1" />
          <h2 className="project-title">project title</h2>
          <div className="pro-details">
            <p>This is a text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
