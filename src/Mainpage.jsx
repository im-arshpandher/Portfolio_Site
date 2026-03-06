import React from "react";
import Navbar from "./common/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import AboutMe from "./components/Aboutme";
import Services from "./components/Services";
import Projects from "./components/Projects";

const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe/>
      <Skills/>
      <Services/>
      <Projects/>
    </div>
  );
};

export default Mainpage;
