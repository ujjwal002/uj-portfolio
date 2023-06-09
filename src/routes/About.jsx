import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Percentage from "../components/Percentage";
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="Im a Full-Stack developer." />
      <Percentage />
      <Footer />
    </div>
  );
};

export default About;
