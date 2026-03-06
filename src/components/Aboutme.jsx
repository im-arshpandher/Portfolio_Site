import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-white text-black px-8 py-16 flex flex-col md:flex-row items-center justify-center gap-10 relative"
    >
      <div className="h-[10px]"></div>
      {/* Scroll to Top */}
      <Link to="hero" smooth={true} duration={500} offset={0} className="hidden md:flex cursor-pointer">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute w-15 h-15 bg-white top-20 left-[calc(50%-2rem)] rounded-full flex items-center justify-center z-10 hover:bg-amber-500 transform rotate-180"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
          </svg>
        </motion.div>
      </Link>

      {/* Scroll to Skills */}
      <Link to="skills" smooth={true} duration={500} offset={0} className="hidden md:flex cursor-pointer">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute w-15 h-15 bg-white top-160 left-[calc(50%-2rem)] rounded-full flex items-center justify-center z-10 hover:bg-amber-500"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
          </svg>
        </motion.div>
      </Link>

      {/* Profile Image */}
      <div className="w-40 flex items-center justify-center rounded-full overflow-hidden">
        <img
          src="/assets/myphoto.png"
          alt="Arsh Pandher"
          className="rounded-xl shadow-xl w-64 h-64 object-cover scale-101"
        />
      </div>

      {/* Text Content */}
      <motion.div
        className="md:w-2/3 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 txt-heading">About Me</h2>

        <p className="text-lg leading-7 text-justify">
          To be exact, A Computer Science student with a strong
          focus on web development. I specialize in building responsive,
          accessible, and interactive websites using technologies like{" "}
          <span className="font-semibold text-amber-600">React</span>,{" "}
          <span className="font-semibold text-amber-600">JavaScript</span>, and{" "}
          <span className="font-semibold text-amber-600">Tailwind CSS</span>.
        </p>

        <p className="text-lg leading-7 mt-4 text-justify">
          I enjoy turning complex problems into simple, beautiful solutions. My
          goal is to always build products that are not only functional but also
          visually appealing and user-friendly.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
