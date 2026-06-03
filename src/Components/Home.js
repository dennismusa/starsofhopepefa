/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";

export default function Home() {
  const images = [image1, image2, image3, image4, image5];
  const [current, setCurrent] = useState(0);

  const [, setStudents] = useState(0);
  const [, setTeachers] = useState(0);
  const [, setClasses] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const s = setInterval(() => {
      setStudents((p) => (p < 500 ? p + 10 : 500));
      setTeachers((p) => (p < 35 ? p + 1 : 35));
      setClasses((p) => (p < 20 ? p + 1 : 20));
    }, 40);

    return () => clearInterval(s);
  }, []);

  // REUSABLE SECTION

  return (
    <div className="text-center">

      {/* HERO */}
 <section className="relative h-[55vh] sm:h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">

  {/* SLIDES */}
  {images.map((img, i) => (
    <img
      key={i}
      src={img}
      alt="school slide"
      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
        i === current
          ? "opacity-100 scale-105"
          : "opacity-0 scale-100"
      }`}
    />
  ))}

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/75"></div>

  {/* GOLD ACCENT */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.10),transparent_65%)]"></div>

  {/* CONTENT */}
  <div className="relative z-10 px-4 sm:px-6 text-center">
    <div className="max-w-4xl mx-auto">

      {/* BADGE */}
      <span className="inline-block bg-yellow-500 text-black px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-lg">
        ✨ Welcome to Excellence
      </span>

      {/* TITLE */}
      <h1
        className="mt-6 text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white"
        style={{
          textShadow: "0 4px 20px rgba(0,0,0,0.6)",
        }}
      >
        Kimana Stars of{" "}
        <span className="text-yellow-400">Hope School</span>
      </h1>

      {/* DESCRIPTION */}
      <p
        className="mt-6 text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto"
        style={{
          textShadow: "0 2px 10px rgba(0,0,0,0.5)",
        }}
      >
        A Christ-centered institution committed to nurturing disciplined,
        creative, and academically excellent learners prepared for a bright
        future.
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

        <Link
    to="/contact"
    className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl text-center"
  >
    Enroll Now
  </Link>

  <Link
    to="/contact"
    className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-center"
  >
    Contact Us
  </Link>

      </div>

    </div>
  </div>

  {/* SCROLL INDICATOR */}
  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/80 animate-bounce">
    <span className="text-xs tracking-[0.3em] font-medium">
      SCROLL
    </span>
    <div className="w-[2px] h-6 bg-white/80 mt-2 rounded-full"></div>
  </div>

</section>

      <section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

    {/* IMAGE */}
    <img
      src={image8}
      alt="about school"
      className="w-full md:w-1/2 h-[420px] object-cover rounded-3xl shadow-xl hover:scale-105 transition duration-500"
    />

    {/* TEXT */}
    <div className="md:w-1/2 text-left">

      <h2 className="text-4xl font-extrabold text-blue-900">
        About Our School
      </h2>

      <p className="mt-5 text-gray-600 leading-relaxed text-lg">
        Kimana Stars of Hope Schools is a Christ-centered institution dedicated
        to nurturing learners who excel academically, grow spiritually, and
        develop strong moral character.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        We believe education is more than academics — it is the shaping of
        discipline, responsibility, and purpose. Our environment encourages
        learners to grow into confident and responsible citizens ready to
        contribute positively to society.
      </p>

      {/* HIGHLIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

        <div className="bg-blue-50 p-4 rounded-xl">
          <h4 className="font-bold text-blue-900">🎯 Our Mission</h4>
          <p className="text-sm text-gray-600 mt-1">
            To provide holistic education that nurtures academic excellence,
            discipline, and Christian values.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl">
          <h4 className="font-bold text-blue-900">👁 Our Vision</h4>
          <p className="text-sm text-gray-600 mt-1">
            To be a leading institution producing disciplined and globally
            competitive learners.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

<section className="py-24 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">

    {/* IMAGE */}
    <img
      src={image7}
      alt="academics"
      className="w-full md:w-1/2 h-[420px] object-cover rounded-3xl shadow-xl hover:scale-105 transition duration-500"
    />

    {/* TEXT */}
    <div className="md:w-1/2 text-left">

      <h2 className="text-4xl font-extrabold text-blue-900">
        Academic Excellence
      </h2>

      <p className="mt-5 text-gray-600 leading-relaxed text-lg">
        We deliver a strong Competency-Based Curriculum (CBC) that equips
        learners with practical knowledge, creativity, and problem-solving
        skills required in the modern world.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Our teaching approach combines academic rigor with hands-on learning,
        ensuring that every learner understands concepts deeply and applies
        them effectively in real-life situations.
      </p>

      {/* FEATURE BOXES */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">

        <div className="bg-white shadow p-5 rounded-xl">
          <h4 className="font-bold text-blue-900">📚 CBC Curriculum</h4>
          <p className="text-sm text-gray-600 mt-1">
            Focused on skills, creativity, and competency development.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-xl">
          <h4 className="font-bold text-blue-900">👨‍🏫 Qualified Teachers</h4>
          <p className="text-sm text-gray-600 mt-1">
            Experienced educators committed to learner success.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-xl">
          <h4 className="font-bold text-blue-900">🧠 Skill Development</h4>
          <p className="text-sm text-gray-600 mt-1">
            Focus on critical thinking and problem solving.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-xl">
          <h4 className="font-bold text-blue-900">🏆 Academic Excellence</h4>
          <p className="text-sm text-gray-600 mt-1">
            Consistent performance and strong exam results.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* CO-CURRICULAR */}
     <section className="py-24 px-6 bg-white">

  {/* HEADER */}
  <div className="text-center max-w-3xl mx-auto mb-14">

    <h2 className="text-4xl font-extrabold text-blue-900">
      Co-curricular Activities
    </h2>

    <p className="mt-4 text-gray-600 text-lg">
      We believe education goes beyond the classroom. Our learners are actively
      engaged in activities that build talent, confidence, teamwork, and creativity.
    </p>

  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    {/* SPORTS */}
    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2">

      <img
        src={image6}
        className="h-56 w-full object-cover"
        alt="sports"
      />

      <div className="p-6 text-left">

        <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
          ⚽ Sports & Athletics
        </h3>

        <p className="text-gray-600 mt-3 leading-relaxed">
          We promote physical fitness through football, athletics, and team-based
          sports that build discipline, endurance, leadership, and teamwork.
        </p>

      </div>
    </div>

    {/* LIBRARY */}
    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2">

      <img
        src={image7}
        className="h-56 w-full object-cover"
        alt="library"
      />

      <div className="p-6 text-left">

        <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
          📚 Library & Research
        </h3>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Our library environment encourages reading culture, research skills,
          and independent learning to improve academic performance.
        </p>

      </div>
    </div>

    {/* MUSIC & DRAMA */}
    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2">

      <img
        src={image8}
        className="h-56 w-full object-cover"
        alt="music drama"
      />

      <div className="p-6 text-left">

        <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
          🎭 Music & Drama
        </h3>

        <p className="text-gray-600 mt-3 leading-relaxed">
          We nurture creativity through music, drama, and performing arts,
          helping learners build confidence and express their talents.
        </p>

      </div>
    </div>

  </div>
</section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white text-center px-6">
        <h2 className="text-3xl font-bold">
          Join Our School Community Today
        </h2>

        <p className="mt-3 text-gray-200">
          Give your child a strong academic and moral foundation.
        </p>

        <button className="mt-6 bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600">
          Apply Now
        </button>
      </section>

      {/* FOOTER */}
          <footer className="bg-gradient-to-b from-red-950 via-red-900 to-red-800 text-white mt-10">

      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* SCHOOL INFO */}
        <div>
          <h2 className="text-2xl font-bold">
            Kimana Stars of Hope Schools
          </h2>

          <p className="text-red-100 mt-4 leading-relaxed">
            A Christ-centered institution dedicated to academic excellence,
            discipline, and holistic development through CBC education.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">

            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <FaFacebookF />
            </a>

            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <FaInstagram />
            </a>

            <a href="tel:+254794749273" className="bg-white/10 p-3 rounded-full hover:bg-green-400 hover:text-black transition">
              <FaPhoneAlt />
            </a>

            <a href="https://wa.me/254794749273" className="bg-white/10 p-3 rounded-full hover:bg-green-500 hover:text-black transition">
              <FaWhatsapp />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-red-700 pb-2">
            Quick Links
          </h3>

          <ul className="space-y-3 text-red-100">
            <li className="hover:text-yellow-300 cursor-pointer transition">Home</li>
            <li className="hover:text-yellow-300 cursor-pointer transition">About Us</li>
            <li className="hover:text-yellow-300 cursor-pointer transition">Admissions</li>
            <li className="hover:text-yellow-300 cursor-pointer transition">Gallery</li>
            <li className="hover:text-yellow-300 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-red-700 pb-2">
            Contact Us
          </h3>

          <div className="space-y-3 text-red-100">

            <p>📍 Kimana, Kajiado County, Kenya</p>
            <p>📞 0794 749273</p>
            <p>📧 kimanastarsofhope2021@gmail.com</p>

          </div>

          {/* QUICK ACTION BUTTONS */}
          <div className="mt-6 flex flex-col gap-3">

            <a
              href="tel:+254794749273"
              className="bg-yellow-500 text-black text-center py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              Call School
            </a>

            <a
              href="https://wa.me/254794749273"
              className="bg-green-500 text-black text-center py-2 rounded-full font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-red-700 text-center py-5 text-red-200 text-sm">
        © {new Date().getFullYear()} Kimana Stars of Hope Schools. All Rights Reserved.
      </div>

    </footer>
    </div>
  );
}