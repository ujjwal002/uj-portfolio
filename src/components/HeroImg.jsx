import "./HeroImgStyle.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="" className="into-img" />
      </div>
      <div className="content">
        <p>HII, I'M UJJWAL KUMAR.</p>
        <h1>FULL-STACK DEVELOPER.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
