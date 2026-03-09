import Navbar from "../common/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../common/Footer";

const Mainpage = () => {
  return (
    <div className="!w-full min-h-screen select-none">
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
