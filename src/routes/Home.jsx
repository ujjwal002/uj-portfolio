import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Workcard from "../components/Workcard";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Workcard />
      <Footer />
    </div>
  );
};

export default Home;
