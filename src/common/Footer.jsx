import { useSelector } from "react-redux";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { personalInfo } from "../config/personalInfo";

const footerLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Services", to: "services" },
  { label: "Projects", to: "projects" },
  { label: "Testimonials", to: "testimonials" },
];

const socials = [
  { icon: <FaInstagram size={20} />, href: personalInfo.instagram },
  { icon: <FaLinkedin size={20} />, href: personalInfo.linkedin },
  { icon: <FaGithub size={20} />, href: personalInfo.github },
];

const Footer = () => {
  const isDark = useSelector((state) => state.darkMode.value);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (to) => {
    const section = document.getElementById(to);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className={`w-full py-12 px-8 ${
        isDark
          ? "bg-gray-900 border-t border-gray-700"
          : "bg-amber-500 border-t border-amber-400"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold tracking-wide"
        >
          <span className={isDark ? "text-white" : "text-black"}>Arsh</span>
          <span className="text-amber-500 dark:text-amber-400">.</span>
        </motion.div>

        {/* Nav Links */}
        {isHome && (
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {footerLinks.map((link) => (
              <span
                key={link.to}
                onClick={() => scrollToSection(link.to)}
                className={`cursor-pointer text-sm font-semibold hover:underline transition duration-200 ${
                  isDark ? "text-gray-300" : "text-black"
                }`}
              >
                {link.label}
              </span>
            ))}
          </motion.div>
        )}

        {/* Social Icons */}
        <motion.div
          className="flex gap-5"
          initial={{ opacity: 0 }}
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

        {/* Divider */}
        <div
          className={`w-full border-t ${isDark ? "border-gray-700" : "border-amber-400"}`}
        />

        {/* Copyright */}
        <motion.p
          className={`text-xs text-center ${isDark ? "text-gray-500" : "text-black/70"}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Made with{" "}
          <FaHeart
            className={`inline mx-1 ${isDark ? "text-amber-500" : "text-black"}`}
            size={12}
          />{" "}
          by Arsh Pandher &nbsp;·&nbsp; © {new Date().getFullYear()} All rights
          reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
