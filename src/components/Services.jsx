import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    icon: <FaCode size={30} />,
    description:
      "Creating fast, responsive, and accessible websites using modern technologies like React and Tailwind CSS.",
  },
  {
    title: "Mobile-Friendly Design",
    icon: <FaMobileAlt size={30} />,
    description:
      "Ensuring every website looks great and functions perfectly on all devices, from phones to desktops.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush size={30} />,
    description:
      "Designing beautiful, intuitive interfaces that enhance user experience and keep visitors engaged.",
  },
  {
    title: "Backend Development",
    icon: <FaServer size={30} />,
    description:
      "Building robust server-side applications and REST APIs using Node.js and Express.js.",
  },
  {
    title: "Database Management",
    icon: <FaDatabase size={30} />,
    description:
      "Designing and managing efficient databases using MongoDB for scalable and reliable data storage.",
  },
  {
    title: "Version Control",
    icon: <FaGitAlt size={30} />,
    description:
      "Managing codebases efficiently using Git and GitHub for clean, collaborative, and trackable development.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Services = () => {
  const isDark = useSelector((state) => state.darkMode.value);

  return (
    <div
      id="services"
      className={`w-full min-h-screen py-16 px-8 flex flex-col items-center relative ${isDark ? "bg-gray-800" : "bg-amber-500"}`}
    >
      <div className="h-[70px]"></div>

      <motion.h2
        className={`text-4xl font-bold mb-12 ${isDark ? "text-white" : "!text-black"}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Services
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center flex flex-col items-center ${
              isDark ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div className="text-amber-500 mb-4">{service.icon}</div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-black"}`}>
              {service.title}
            </h3>
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;