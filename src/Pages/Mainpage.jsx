import React from "react";
import Navbar from "../common/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import AboutMe from "../components/Aboutme";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Footer from "../common/Footer";

const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills/>
      <Services/>
      <Testimonials/>
      <Footer />
    </div>
  );
};

export default Mainpage;
