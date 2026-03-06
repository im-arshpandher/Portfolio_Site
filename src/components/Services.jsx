import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

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
];

const Services = () => {
  return (
    <div
      id="services"
      className="w-full min-h-screen py-16 px-8 flex flex-col items-center relative bg-amber-500"
    >
      <Link
        to="skills"
        smooth={true}
        duration={500}
        offset={0}
        className="hidden md:flex cursor-pointer"
      >
        {" "}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute w-15 h-15 hover:bg-white top-20 left-[calc(50%-2rem)] rounded-full flex items-center justify-center z-10 bg-amber-500 transform rotate-180"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </motion.div>
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        offset={0}
        className="hidden md:flex cursor-pointer"
      >
        {" "}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute w-15 h-15 hover:bg-white top-160 left-[calc(50%-2rem)] rounded-full flex items-center justify-center z-10 bg-amber-500"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </motion.div>
      </Link>
      <div className="h-[120px]"></div>
      <h2 className="text-4xl font-bold mb-12 !text-black">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center flex flex-col items-center mt-8"
          >
            <div className="text-amber-500 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
