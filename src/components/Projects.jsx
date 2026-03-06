import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-scroll";

const projects = [
  {
    id: 1,
    project_name: "Hianime Clone",
    project_images: [
      "/assets/projects/HianimeClone/Hianime1.png",
      "/assets/projects/HianimeClone/Hianime2.png",
      "/assets/projects/HianimeClone/Hianime3.png",
    ],
    project_description:
      "A full-stack anime streaming website clone inspired by Hianime. It features genre filtering, episode streaming, and anime details using the Jikan API.",
    project_start: "2025-01-10",
    project_end: "2025-04-20",
  },
  {
    id: 2,
    project_name: "Movie Recommendation System",
    project_images: [
      "/assets/projects/MovieRecommendation/movie1.png",
      "/assets/projects/MovieRecommendation/movie2.png",
      "/assets/projects/MovieRecommendation/movie3.png",
    ],
    project_description:
      "A content-based movie recommendation system built with Python and machine learning techniques, providing similar movie suggestions based on user preferences.",
    project_start: "2024-11-01",
    project_end: "2025-01-15",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div
      id="projects"
      className="relative w-full min-h-screen overflow-hidden bg-gray-100 p-6"
    >
      <div className="h-[70px] md:h-[120px]"></div>
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
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          My Projects
        </h1>
      </div>

      <div className="h-30vh flex flex-col md:flex-row gap-4 overflow-auto">
        {/* Left Project List */}
        <div className="md:w-[40%] bg-white rounded-xl shadow-md p-4 space-y-3">
          <h1 className="text-lg font-semibold">List Of My Recent Projects</h1>
          {projects.map((item) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              key={item.id}
              onClick={() => setActiveProject(item)}
              className={`cursor-pointer px-3 py-2 rounded-md transition duration-300 ${
                activeProject.id === item.id
                  ? "bg-amber-500 text-white"
                  : "bg-amber-100 text-black hover:bg-amber-200"
              }`}
            >
              {item.project_name}
            </motion.div>
          ))}
        </div>

        {/* Right Project Details */}
        <div className="md:w-[65%] bg-amber-500/90 rounded-xl shadow-md p-6 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-black">
              {activeProject.project_name}
            </h2>
            <p className="text-gray-800 mt-2">
              {activeProject.project_description}
            </p>
            <div className="flex flex-col md:flex-row items-center mt-4 py-2">
              <div className="text-sm text-gray-500 px-2">
                {activeProject.project_start} → {activeProject.project_end}
              </div>
              <div>
                {" "}
                <p className="text-gray-800">
                  Project Link:{" "}
                  <a
                    href={activeProject.project_link}
                    className="text-blue-500 hover:underline"
                  >
                    {activeProject.project_link}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center w-full color">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              className="w-full h-auto"
              pagination={{ clickable: true }}
              loop={true}
            >
              {activeProject.project_images.map((el, index) => (
                <SwiperSlide
                  key={`${activeProject.id}-${index}`}
                  className="flex justify-center"
                >
                  <img
                    src={el}
                    alt=""
                    className="w-full max-w-[450px] h-auto object-contain rounded-lg shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
