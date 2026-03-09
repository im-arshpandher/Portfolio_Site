
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

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
  const isDark = useSelector((state) => state.darkMode.value);

  const skillSet = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Git & GitHub", icon: "🐙" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
  ];

  return (
    <div
      id="skills"
      className={`w-full min-h-screen px-8 py-16 flex flex-col items-center relative ${isDark ? "bg-gray-900 text-white" : "bg-amber-50 text-black"}`}
    >
      <div className="h-[70px]"></div>

      <motion.h2
        className={`text-4xl font-bold mb-8 ${isDark ? "text-white" : "text-black"}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillSet.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillItemVariants}
            className={`border text-center shadow-md rounded-xl px-6 py-6 text-lg font-semibold transition duration-300 flex flex-col items-center gap-2 ${
              isDark
                ? "bg-gray-800 border-amber-500 hover:bg-gray-700 text-white"
                : "bg-white border-amber-300 hover:bg-amber-100 text-black"
            }`}
          >
            <span className="text-3xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;