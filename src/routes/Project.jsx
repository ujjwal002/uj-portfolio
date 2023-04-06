import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Workcard from "../components/Workcard";
const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent warks" />
      <Workcard />
      <Footer />
    </div>
  );
};

export default Project;
