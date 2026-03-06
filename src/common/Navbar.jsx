import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [highlight, setHighlight] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, text: "HOME", to: "hero" },
    { id: 2, text: "ABOUT ME", to: "about" },
    { id: 3, text: "SKILLS", to: "skills" },
    { id: 4, text: "SERVICES", to: "services" },
    { id: 5, text: "PROJECTS", to: "projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].to);
        if (section && section.offsetTop <= scrollPosition) {
          setHighlight(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 0, behavior: "smooth" });
      setIsOpen(false); // Close sidebar after click
    }
  };

  return (
    <>
      {/* Animated Navbar Container */}
      <motion.div
        className="bg-white w-full h-[70px] border-b flex justify-between items-center px-5 fixed top-0 z-[100]"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="h-[50px] cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img className="h-[50px]" src="/assets/arshpandher1.png" alt="logo" />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => scrollToSection(item.to)}
              className={`cursor-pointer h-[70px] w-25 flex justify-center p-2 ${
                highlight === item.id
                  ? "active-link pt-7"
                  : "hover:bg-red-200 hover:underline underline-offset-7"
              }`}
            >
              {item.text}
            </motion.div>
          ))}
        </div>

        {/* Desktop Socials & Button */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.example.com"
            target="_blank"
          >
            <img className="h-[35px] cursor-pointer" src="https://th.bing.com/th/id/OIP.cfjX6Fxc5vGo3lE8t3fvRgHaHa?rs=1&pid=ImgDetMain" alt="social1" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.example.com"
            target="_blank"
          >
            <img className="h-[35px] cursor-pointer" src="/assets/zdrd406f.png" alt="social2" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.example.com"
            target="_blank"
          >
            <img className="h-[35px] cursor-pointer" src="https://pngimg.com/uploads/github/github_PNG80.png" alt="github" />
          </motion.a>
          <motion.button
            className="bg-amber-500 p-2 rounded hover:bg-amber-600 cursor-pointer transition text-white"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </motion.div>

      {/* Sidebar (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-[200] p-6 flex flex-col gap-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <HiX size={30} onClick={() => setIsOpen(false)} className="cursor-pointer" />
            </div>

            {/* Nav Items with animation */}
            <motion.div
              className="flex flex-col gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  onClick={() => scrollToSection(item.to)}
                  className={`text-lg font-semibold cursor-pointer ${
                    highlight === item.id ? "text-red-500" : "text-black"
                  }`}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {item.text}
                </motion.div>
              ))}
            </motion.div>

            {/* Social Icons & Button */}
            <div className="mt-auto flex flex-col gap-4">
              <div className="flex gap-3">
                <motion.a whileHover={{ scale: 1.1 }} href="https://www.example.com" target="_blank">
                  <img className="h-[35px]" src="https://th.bing.com/th/id/OIP.cfjX6Fxc5vGo3lE8t3fvRgHaHa?rs=1&pid=ImgDetMain" alt="social1" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="https://www.example.com" target="_blank">
                  <img className="h-[35px]" src="/assets/zdrd406f.png" alt="social2" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="https://www.example.com" target="_blank">
                  <img className="h-[35px]" src="https://pngimg.com/uploads/github/github_PNG80.png" alt="github" />
                </motion.a>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-amber-500 py-2 rounded text-white hover:bg-amber-600"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
