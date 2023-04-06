import React from "react";
import "./Percentage.css";
const Percentage = () => {
  return (
    <div className="percentage">
      <h1>My Skills</h1>
      {/* <hr /> */}
      <p>HTML</p>
      <div class="container">
        <div class="skill html">100%</div>
      </div>

      <p>CSS</p>
      <div class="container">
        <div class="skill css">90%</div>
      </div>
      <p>JavaScript</p>
      <div class="container">
        <div class="skill js">90%</div>
      </div>
      <p>ReactJs</p>
      <div class="container">
        <div class="skill rs">80%</div>
      </div>
      <p>NodeJS</p>
      <div class="container">
        <div class="skill ns">75%</div>
      </div>
      <p>ExpressJS</p>
      <div class="container">
        <div class="skill es">85%</div>
      </div>
      <p>MongoDb</p>
      <div class="container">
        <div class="skill mb">75%</div>
      </div>
    </div>
  );
};

export default Percentage;
