import React from "react";
import Navbar from "./common/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import AboutMe from "./components/Aboutme";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe/>
      <Skills/>
      <Services/>
      <Testimonials/>
    </div>
  );
};

export default Mainpage;
