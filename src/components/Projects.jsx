import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useProjects from "../hooks/useProjects.hook";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  const { projects, loading, error } = useProjects();
  const [activeProject, setActiveProject] = useState(null);
  const isDark = useSelector((state) => state.darkMode.value);

  useEffect(() => {
    if (projects.length > 0) {
      setActiveProject(projects[0]);
    }
  }, [projects]);

  if (loading) return <p className={isDark ? "text-white" : "text-black"}>Loading projects...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div
      id="projects"
      className={`relative w-full h-screen overflow-hidden p-6 ${isDark ? "bg-gray-900 text-white" : "bg-amber-50 text-black"}`}
    >
      <div className="h-[70px] md:h-[70px]"></div>
      <h1 className={`text-4xl font-bold mb-8 text-center ${isDark ? "text-white" : "text-black"}`}>Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className={`p-4 border rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300 ${
              isDark
                ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                : "bg-white border-gray-200 hover:bg-gray-50"
            }`}
          >
            <h2 className="text-xl font-semibold">{project.project_name}</h2>
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
              {project.project_description}
            </p>
          </div>
        ))}
      </div>

      {activeProject && (
        <div
          className={`mt-8 p-4 border rounded-lg shadow-md ${
            isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">{activeProject.project_name}</h2>
          <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-700"}`}>
            {activeProject.project_description}
          </p>

          {/* Mobile: Swiper */}
          <div className="block md:hidden">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={16}
              slidesPerView={1}
              className="pb-8"
            >
              {activeProject.project_images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${activeProject.project_name} screenshot ${index + 1}`}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {activeProject.project_images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${activeProject.project_name} screenshot ${index + 1}`}
                className="w-full h-70 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;