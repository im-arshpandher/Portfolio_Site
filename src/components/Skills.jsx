import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const Skills = () => {
  const skillSet = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git & GitHub",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  // Marquee skill groups
  const marqueeSkills = [
    ["HTML", "CSS", "Javascript", "React JS", "Node JS"],
    ["Redux", "Bootstrap", "Material UI", "Tailwind", "NPM", "Express JS"],
    ["Rest API", "Docker", "Postman", "Figma", "MongoDB", "Git"],
  ];

  // Marquee colors for each row (optional)
  const marqueeBg = ["bg-amber-100", "bg-amber-200", "bg-amber-50"];

  // Import Marquee at the top: import Marquee from "react-fast-marquee";
  // (Make sure to install react-fast-marquee if not already)

  return (
    <div
      id="skills"
      className="w-full min-h-screen  bg-amber-50 !text-black px-8 py-16 flex flex-col items-center relative"
    >
      {/* Scroll Up */}
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={0}
        className="hidden md:flex cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute w-15 h-15 bg-white top-20 left-[calc(50%-2rem)] rounded-full flex items-center justify-center z-10 hover:bg-amber-500 transform rotate-180"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
          </svg>
        </motion.div>
      </Link>

      {/* Scroll Down */}
      <Link
        to="services"
        smooth={true}
        duration={500}
        offset={0}
        className="hidden md:flex cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute w-15 h-15 bg-white top-160 left-[calc(50%-2rem)] rounded-full flex items-center justify-center z-10 hover:bg-amber-500"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
          </svg>
        </motion.div>
      </Link>

      <div className="h-[120px]"></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-8 txt-heading !text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      {/* Skill Cards with Animation */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillSet.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillItemVariants}
            className="bg-white border cursor-pointer border-amber-300 text-center shadow-md rounded-xl px-6 py-4 text-lg font-semibold hover:bg-amber-100 transition duration-300"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
