import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { invert } from "../redux/colorModeSlice";

const Navbar = () => {
  const [highlight, setHighlight] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, text: "HOME", to: "hero" },
    { id: 2, text: "ABOUT ME", to: "about" },
    { id: 3, text: "SKILLS", to: "skills" },
    { id: 4, text: "SERVICES", to: "services" },
    { id: 5, text: "TESTIMONIALS", to: "testimonials" },
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
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.example.com"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 2476 2476"
              id="instagram"
            >
              <path fill={isDark ? "#ffffff" : "#00020c"} d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.example.com"
            target="_blank"
          >
            {/* <img
              className="h-[35px] cursor-pointer"
              src="https://pngimg.com/uploads/github/github_PNG80.png"
              alt="github"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="github"
              width="45"
              height="45"
            >
              <path
               fill={isDark ? "#00020c" : "#ffffff"}
                fill-rule="evenodd"
                d="m60,12c0-4.42-3.58-8-8-8H12c-4.42,0-8,3.58-8,8v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"
              ></path>
              <path
                fill={isDark ? "#ffffff" : "#00020c"}
                fill-rule="evenodd"
                d="m26.73,47.67c0,1.1-.01,2.3-.01,3.4,0,.26-.13.51-.34.67-.21.16-.49.2-.74.13-8.4-2.7-14.49-10.58-14.49-19.87,0-11.51,9.34-20.85,20.85-20.85s20.85,9.34,20.85,20.85c0,9.28-6.08,17.15-14.46,19.85-.25.08-.53.03-.74-.13-.21-.16-.34-.4-.34-.67-.02-2.45-.03-5.34-.03-6.65s-1.28-2.39-1.28-2.39c0,0,9.45-1.16,9.45-9.34,0-5.19-2.06-6.94-2.06-6.94.44-1.86.38-3.63-.1-5.31-.07-.24-.31-.4-.56-.38-2.01.18-3.85.91-5.52,2.24,0,0-2.95-.81-5.2-.81h0c-2.25,0-5.2.81-5.2.81-1.67-1.32-3.52-2.06-5.52-2.24-.25-.02-.49.14-.56.38-.48,1.68-.54,3.45-.11,5.31,0,0-2.05,1.75-2.05,6.94,0,8.18,9.45,9.34,9.45,9.34,0,0-1.28,1.08-1.28,2.39v.3c-.72.26-1.7.5-2.8.43-2.99-.2-3.39-3.42-4.62-3.94-.9-.38-1.78-.43-2.45-.37-.2.02-.36.16-.41.35-.05.19.02.39.18.51.81.55,1.89,1.33,2.19,1.9.81,1.52,2.06,3.93,3.67,4.19,1.96.32,3.36.13,4.25-.12h0Z"
              ></path>
            </svg>
          </motion.a>
          <motion.button
            className="bg-amber-500 p-2 rounded hover:bg-amber-600 cursor-pointer transition text-white"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.button>
          <div className="checkbox-wrapper-3">
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
        <div className="md:hidden">
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
              {navItems.map((item) => (
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
              <div className="checkbox-wrapper-3">
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
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.example.com"
                  target="_blank"
                >
                  <img
                    className="h-[35px]"
                    src="https://th.bing.com/th/id/OIP.cfjX6Fxc5vGo3lE8t3fvRgHaHa?rs=1&pid=ImgDetMain"
                    alt="social1"
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.example.com"
                  target="_blank"
                >
                  <img
                    className="h-[35px]"
                    src="/assets/zdrd406f.png"
                    alt="social2"
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.example.com"
                  target="_blank"
                >
                  <img
                    className="h-[35px]"
                    src="https://pngimg.com/uploads/github/github_PNG80.png"
                    alt="github"
                  />
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
