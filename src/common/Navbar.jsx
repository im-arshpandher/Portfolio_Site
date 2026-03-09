import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { invert } from "../redux/colorModeSlice";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { personalInfo } from "../config/personalInfo"; 

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [highlight, setHighlight] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, text: "ABOUT ME", to: "about" },
    { id: 2, text: "SKILLS", to: "skills" },
    { id: 3, text: "SERVICES", to: "services" },
    { id: 4, text: "TESTIMONIALS", to: "testimonials" },
  ];

  const socials = [
    { icon: <FaInstagram size={20} />, href: personalInfo.instagram },
    { icon: <FaLinkedin size={20} />, href: personalInfo.linkedin },
    { icon: <FaGithub size={20} />, href: personalInfo.github },
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
    setHighlight(id);
    const section = document.getElementById(
      navItems.find((item) => item.id === id).to,
    );
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme !== null) {
      dispatch(invert(storedTheme === "true"));
    } else {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)",
      );
      dispatch(invert(darkModeMediaQuery.matches));
      localStorage.setItem("darkMode", darkModeMediaQuery.matches.toString());
      const handleChange = (e) => {
        dispatch(invert(e.matches));
        localStorage.setItem("darkMode", e.matches.toString());
      };
      darkModeMediaQuery.addEventListener("change", handleChange);
      return () => {
        darkModeMediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [dispatch]);

  return (
    <>
      <motion.div
        className={`w-full h-[70px] border-b flex justify-between items-center px-5 fixed top-0 z-[100] ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Logo */}
        <Link to="/"><motion.div
          className="h-[50px] cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img className="h-[50px]" src="/assets/arshpandher1.png" alt="logo" />
        </motion.div></Link>

        {/* Desktop Nav */}
        <div className="hidden min-[1056px]:flex items-center gap-5">
          {isHome &&
            navItems.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer h-[70px] flex justify-center p-2 font-bold ${
                  highlight === item.id
                    ? "active-link pt-7 pr-2 pl-2"
                    : `hover:bg-red-200 hover:text-black hover:underline underline-offset-7 ${isDark ? "text-gray-200" : "text-gray-800"}`
                }`}
              >
                {item.text}
              </motion.div>
            ))}
        </div>

        {/* Desktop Socials & Button */}
        <div className="hidden md:flex items-center gap-3">
          <motion.div
            className="flex gap-3 p-3"
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className={`transition duration-200 ${
                  isDark ? "text-gray-300" : "text-black"
                }`}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
          {isHome && <Link to="/contact" className="py-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-amber-500 !py-2 px-2 rounded text-white hover:bg-amber-600 cursor-pointer"
                >
                  Contact Us
                </motion.button>
              </Link>}
          <div title="Toggle Theme" className="checkbox-wrapper-3">
            <input
              type="checkbox"
              id="cbx-3"
              checked={isDark}
              onChange={() => {
                dispatch(invert(!isDark));
                localStorage.setItem("darkMode", (!isDark).toString());
              }}
            />
            <label htmlFor="cbx-3" className="toggle">
              <span />
            </label>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="min-[1056px]:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={isDark ? "text-white" : "text-gray-800"}
          >
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </motion.div>

      {/* Sidebar (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed top-0 right-0 h-full w-64 shadow-lg z-[200] p-6 flex flex-col gap-6 ${isDark ? "bg-gray-900" : "bg-white"}`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-end">
              <HiX
                size={30}
                onClick={() => setIsOpen(false)}
                className={`cursor-pointer ${isDark ? "text-white" : "text-black"}`}
              />
            </div>

            <motion.div
              className="flex flex-col gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {isHome &&
                navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsOpen(false);
                    }}
                    className={`text-lg font-semibold cursor-pointer ${
                      highlight === item.id
                        ? "text-red-500"
                        : isDark
                          ? "text-gray-200"
                          : "text-black"
                    }`}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    {item.text}
                  </motion.div>
                ))}
              <div title="Toggle Theme" className="checkbox-wrapper-3">
                <input
                  type="checkbox"
                  id="cbx-3"
                  checked={isDark}
                  onChange={() => {
                    dispatch(invert(!isDark));
                    localStorage.setItem("darkMode", (!isDark).toString());
                  }}
                />
                <label htmlFor="cbx-3" className="toggle">
                  <span />
                </label>
              </div>
            </motion.div>

            <div className="mt-auto flex flex-col gap-4">
              <div className="flex gap-3">
          {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className={`transition duration-200 ${
                  isDark ? "text-gray-300" : "text-black"
                }`}
              >
                {s.icon}
              </motion.a>
            ))}
              </div>
             {isHome && <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-amber-500 py-2 px-2 rounded text-white hover:bg-amber-600 cursor-pointer"
                >
                  Contact Us
                </motion.button>
              </Link>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
