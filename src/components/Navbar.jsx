import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="header">
      <Link to="/">
        <h1>UJ-Portfolio</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
      <div className="hamburger">
        <FaBars size={20} style={{ color: "#fff" }} />
      </div>
    </div>
  );
};

export default Navbar;
