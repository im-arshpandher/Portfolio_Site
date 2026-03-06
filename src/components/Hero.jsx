import React from "react";
import { motion } from "framer-motion";
import useTypewriter from "../logics/Typewrite";
import { Link } from "react-scroll";

const words1 =
  `Myself Arsh — a passionate web programmer with a love for clean design and interactivity.
`.split(" ");

const words = "• FRONTEND DEVELOPER • REACT SPECIALIST • UI CRAFTSMAN".split(
  " "
);

const Hero = () => {
  const typedText = useTypewriter([
    "Web Developer",
    "Frontend Engineer",
    "React Coder",
  ]);

  return (
    <div id="hero" className="w-full h-screen flex flex-col">
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={0}
        className="hidden md:flex cursor-pointer"
      >
        {" "}
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
      <div className="relative flex items-center justify-around w-full h-50 ">
        <div className="flex justify-center items-center absolute z-2 ">
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

            {/* Rotating Text using Framer Motion */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              style={{ transformOrigin: "250px 250px" }}
            >
              <text fill="black" fontSize="14" fontWeight="bold">
                <textPath
                  href="#circlePath"
                  startOffset="0"
                  textLength="628"
                  // lengthAdjust="spacing"
                >
                  WEB-DEVELOPER ⋅ REACT-CODER ⋅ FRONTEND-ENGINEER ⋅
                </textPath>
              </text>
            </motion.g>

            {/* Center Diamond Star */}
            <path
              d="M150 135 L145 150 L150 165 L155 150 Z"
              fill="black"
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
          <h1 className=" text-6xl ">IM</h1>
        <div>
          <span className="text-amber-500 text-4 xl md:text-6xl  font-bold !text-center">
            {typedText}
            <span className="blinking-cursor ml-1">|</span>
          </span>
        </div>
        <motion.div className="top-100 text-xl txt-heading w-auto text-wrap text-center sm:py-2 md:py-6 py-2 flex flex-wrap justify-center gap-2 !text-black font-semibold">
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
