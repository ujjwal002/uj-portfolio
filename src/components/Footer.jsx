import React from "react";
import "./footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaGithub,
  FaLinkedinIn,
  FaHackerrank,
  FaLinkedin,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="loacation">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Shyam Nagar,</p>
              <p>Jehanabad,Bihar</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              6204-00
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              ujjwalsinghrajput2000@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            This is ujjwal kumar ,Fresher and Ece Student looking to build a
            carrier in full stack developmentasdfsdfd
          </p>
          <div className="social">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaHackerrank
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
