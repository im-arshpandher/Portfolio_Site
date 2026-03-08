import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const AboutMe = () => {
  const isDark = useSelector((state) => state.darkMode.value);

  return (
    <div
      id="about"
      className={`w-full min-h-screen px-8 py-16 flex flex-col md:flex-row items-center justify-center gap-10 relative ${isDark ? "bg-gray-900 text-white" : "bg-white !text-black"}`}
    >
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
        <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>About Me</h2>

        <p className={`text-lg leading-7 text-justify ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          To be exact, A Computer Science student with a strong focus on web
          development. I specialize in building responsive, accessible, and
          interactive websites using technologies like{" "}
          <span className="font-semibold text-amber-500">React</span>,{" "}
          <span className="font-semibold text-amber-500">JavaScript</span>, and{" "}
          <span className="font-semibold text-amber-500">Tailwind CSS</span>.
        </p>

        <p className={`text-lg leading-7 mt-4 text-justify ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          I enjoy turning complex problems into simple, beautiful solutions. My
          goal is to always build products that are not only functional but also
          visually appealing and user-friendly.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;