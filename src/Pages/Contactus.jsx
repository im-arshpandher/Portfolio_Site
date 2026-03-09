import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { z } from "zod";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { personalInfo } from "../config/personalInfo";
import { customList } from "country-codes-list";

const countries = Object.entries(
  customList("countryCode", "{countryCallingCode}"),
);

const reasons = [
  "Hire Me",
  "Freelance Project",
  "Collaboration",
  "Feedback",
  "General Inquiry",
  "Others",
];

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .max(15, "Phone number too long")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  reason: z.string().min(1, "Please select a reason"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contactus = () => {
  const isDark = useSelector((state) => state.darkMode.value);

  const [form, setForm] = useState({
    fullName: "",
    countryCode: "+1",
    phone: "",
    email: "",
    subject: "",
    reason: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    console.log(result.data);
  };

  const inputClass = (field) =>
    `w-full px-4 py-2 rounded-lg border outline-none transition duration-200 ${
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : isDark
          ? "bg-gray-800 border-gray-600 text-white placeholder-gray-500 focus:border-amber-500"
          : "bg-white border-gray-300 text-black placeholder-gray-400 focus:border-amber-500"
    } ${isDark ? "bg-gray-800 text-white placeholder-gray-500" : "bg-white text-black placeholder-gray-400"}`;

  const labelClass = `block text-sm font-semibold mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`;

  const ErrorMsg = ({ field }) =>
    errors[field] ? (
      <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
    ) : null;

  return (
    <>
      <Navbar />
      <div
        id="contact"
        className={`w-full min-h-screen py-16 px-8 flex flex-col items-center ${
          isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div className="h-[40px]"></div>

        <motion.h2
          className={`text-4xl font-bold mb-4 txt-heading ${isDark ? "!text-white" : "!text-amber-500"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className={`mb-12 text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let's work together or just say hi!
        </motion.p>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT — Form */}
          <motion.form
            onSubmit={handleSubmit}
            className={`p-8 rounded-2xl shadow-lg flex flex-col gap-5 ${
              isDark
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {submitted && (
              <div className="bg-green-500/20 border border-green-500 text-green-500 rounded-lg px-4 py-3 text-sm font-semibold">
                ✅ Message sent successfully!
              </div>
            )}

            {/* Full Name */}
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={form.fullName}
                onChange={handleChange}
                className={inputClass("fullName")}
              />
              <ErrorMsg field="fullName" />
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>Phone Number</label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className={`px-2 py-2 rounded-lg border outline-none transition duration-200 ${
                    isDark
                      ? "bg-gray-800 border-gray-600 text-white focus:border-amber-500"
                      : "bg-white border-gray-300 text-black focus:border-amber-500"
                  }`}
                >
                  {countries.map(([code, dial]) => (
                    <option key={code} value={`+${dial}`}>
                      {code} +{dial}
                    </option>
                  ))}
                </select>
                <div className="flex-1">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="123 456 7890"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass("phone")}
                  />
                </div>
              </div>
              <ErrorMsg field="phone" />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              <ErrorMsg field="email" />
            </div>

            {/* Subject */}
            <div>
              <label className={labelClass}>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project Discussion"
                value={form.subject}
                onChange={handleChange}
                className={inputClass("subject")}
              />
              <ErrorMsg field="subject" />
            </div>

            {/* Reason */}
            <div>
              <label className={labelClass}>Reason for Contact</label>
              <select
                name="reason"
                value={form.reason}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border outline-none transition duration-200 ${
                  errors.reason
                    ? "border-red-500"
                    : isDark
                      ? "bg-gray-800 border-gray-600 text-white focus:border-amber-500"
                      : "bg-white border-gray-300 text-black focus:border-amber-500"
                }`}
              >
                <option value="" disabled>
                  Select a reason...
                </option>
                {reasons.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <ErrorMsg field="reason" />
            </div>

            {/* Message */}
            <div>
              <label className={labelClass}>Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`${inputClass("message")} resize-none`}
              />
              <ErrorMsg field="message" />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* RIGHT — Contact Details */}
          <motion.div
            className="flex flex-col gap-8 justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
              <p
                className={`text-sm leading-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Feel free to reach out for collaborations, freelance work, or
                just a friendly hello. I'll get back to you as soon as possible!
              </p>
            </div>

            {[
              {
                icon: <FaPhone className="text-amber-500" size={20} />,
                label: "Phone",
              },
              {
                icon: <FaEnvelope className="text-amber-500" size={20} />,
                label: "Email",
              },
              {
                icon: <FaMapMarkerAlt className="text-amber-500" size={20} />,
                label: "Location",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                className={`flex items-center gap-4 p-4 rounded-xl border shadow-sm transition duration-300 ${
                  isDark
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <div
                  className={`p-3 rounded-full ${isDark ? "bg-gray-700" : "bg-amber-100"}`}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {item.label}
                  </p>
                  <p className="font-semibold">
                    {personalInfo[item.label.toLowerCase()]}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="flex max-sm:flex-col gap-4 mt-2">
              {[
                {
                  icon: <FaInstagram size={20} />,
                  href: personalInfo.instagram,
                  label: "Instagram",
                },
                {
                  icon: <FaLinkedin size={22} />,
                  href: personalInfo.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: <FaGithub size={22} />,
                  href: personalInfo.github,
                  label: "GitHub",
                },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg border font-semibold text-sm transition duration-200 justify-center ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-gray-300 hover:text-amber-500 hover:border-amber-500"
                      : "bg-white border-gray-200 text-gray-700 hover:text-amber-500 hover:border-amber-500"
                  }`}
                >
                  {s.icon} {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
