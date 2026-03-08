import React from "react";
import { motion } from "framer-motion";
import useTypewriter from "../logics/Typewrite";
import { useSelector } from "react-redux";

const words1 = `Myself Arsh — a passionate web programmer with a love for clean design and interactivity.`.split(" ");

const Hero = () => {
  const typedText = useTypewriter([
    "Web Developer",
    "Frontend Engineer",
    "React Coder",
  ]);

  const isDark = useSelector((state) => state.darkMode.value);

  return (
    <div id="hero" className={`w-full h-screen flex flex-col ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <div className="h-[120px]"></div>
      <div className="relative flex items-center justify-around w-full h-50">
        <div className="flex justify-center items-center absolute z-2">
          <svg width="200" height="200" viewBox="0 0 300 300">
            <defs>
              <path
                id="circlePath"
                d="M 150, 150
               m -100, 0
               a 100,100 0 1,1 200,0
               a 100,100 0 1,1 -200,0"
              />
            </defs>

            <motion.g
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              style={{ transformOrigin: "250px 250px" }}
            >
              <text fill={isDark ? "white" : "black"} fontSize="14" fontWeight="bold">
                <textPath href="#circlePath" startOffset="0" textLength="628">
                  WEB-DEVELOPER ⋅ REACT-CODER ⋅ FRONTEND-ENGINEER ⋅
                </textPath>
              </text>
            </motion.g>

            <path
              d="M150 135 L145 150 L150 165 L155 150 Z"
              fill={isDark ? "white" : "black"}
              transform="rotate(45 150 150)"
            />
          </svg>
        </div>

        <div className="w-25 h-25 rounded-full bg-red-200 overflow-hidden z-8">
          <img
            className="object-cover w-full h-full transform scale-105"
            src="/assets/myphoto.png"
            alt=""
          />
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center justify-center gap-10">
        <h1 className={`text-6xl ${isDark ? "text-white" : "text-black"}`}>IM</h1>
        <div>
          <span className="text-amber-500 text-4xl md:text-6xl font-bold text-center">
            {typedText}
            <span className="blinking-cursor ml-1">|</span>
          </span>
        </div>
        <motion.div className={`top-100 text-xl txt-heading w-auto text-wrap text-center sm:py-2 md:py-6 py-2 flex flex-wrap justify-center gap-2 font-semibold ${isDark ? "!text-gray-300" : "!text-black"}`}>
          {words1.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;