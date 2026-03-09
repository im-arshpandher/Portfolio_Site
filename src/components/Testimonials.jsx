import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Arsh delivered an outstanding website for our startup. Clean code, pixel-perfect design, and delivered ahead of schedule. Highly recommended!",
  },
  {
    name: "David Lee",
    role: "CEO, TechVibe",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Working with Arsh was a pleasure. He understood our vision immediately and built exactly what we needed. The UI is smooth and beautiful.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, DesignCo",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "Exceptional attention to detail and great communication throughout the project. Our users love the new interface!",
  },
  {
    name: "James Carter",
    role: "CTO, DevStack",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    message:
      "Arsh built our entire frontend from scratch in record time. The code quality is top-notch and very maintainable.",
  },
  {
    name: "Emily Zhang",
    role: "Marketing Lead",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
    message:
      "The landing page Arsh designed boosted our conversions significantly. He truly understands both design and development.",
  },
  {
    name: "Omar Malik",
    role: "Freelance Designer",
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    message:
      "Collaborated with Arsh on a client project and was impressed by his React skills and problem-solving approach.",
  },
];

const Testimonials = () => {
  const isDark = useSelector((state) => state.darkMode.value);

  return (
    <div
      id="testimonials"
      className={`w-full min-h-screen py-16 px-8 flex flex-col items-center ${
        isDark ? "bg-gray-900 text-white" : "bg-amber-50 text-black"
      }`}
    >
      <div className="h-[120px]"></div>

      <motion.h2
        className={`text-4xl font-bold mb-4 txt-heading ${isDark ? "!text-white" : "!text-black"}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Testimonials
      </motion.h2>

      <motion.p
        className={`mb-12 text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        What people say about working with me
      </motion.p>

      <div className="w-full max-w-6xl h-60">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={24}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 h-full"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div
                className={`p-6 rounded-2xl shadow-lg flex flex-col gap-4 h-full ${
                  isDark
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white border border-amber-200"
                }`}
              >
                <FaQuoteLeft className="text-amber-500" size={24} />

                <p className={`text-sm leading-6 line-clamp-3 !text-justify ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {t.message}
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                  />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;