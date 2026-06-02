/* eslint-disable jsx-a11y/anchor-is-valid */
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">

        <img
          src={image1}
          alt="school"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">

          <h1 className="text-3xl md:text-5xl font-extrabold">
            About Kimana Stars of Hope Schools
          </h1>

          <p className="mt-4 text-gray-200 text-sm md:text-lg">
            A Christ-centered institution nurturing excellence, discipline,
            and holistic growth.
          </p>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        <img
          src={image2}
          alt="students"
          className="w-full md:w-1/2 h-[380px] object-cover rounded-2xl shadow-lg"
        />

        <div className="md:w-1/2">

          <h2 className="text-3xl font-bold text-blue-900">
            Who We Are
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Kimana Stars of Hope Schools is a faith-based institution committed
            to providing quality Competency-Based Curriculum (CBC) education.
            We focus on academic excellence, spiritual growth, and character
            development to prepare learners for the future.
          </p>

          <p className="mt-4 text-gray-600">
            Our environment encourages discipline, creativity, and responsibility,
            ensuring learners grow into confident and capable individuals.
          </p>

        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="py-16 px-6 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">

            <img
              src={image3}
              alt="vision"
              className="h-40 w-full object-cover rounded-xl mb-5"
            />

            <h3 className="text-xl font-bold text-blue-900">🌟 Vision</h3>

            <p className="mt-3 text-gray-600">
              To be a leading institution producing disciplined, innovative,
              and globally competitive learners who excel academically and morally.
            </p>

          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">

            <img
              src={image2}
              alt="mission"
              className="h-40 w-full object-cover rounded-xl mb-5"
            />

            <h3 className="text-xl font-bold text-blue-900">🎯 Mission</h3>

            <p className="mt-3 text-gray-600">
              To provide quality CBC-based education in a Christ-centered environment
              that nurtures academic excellence, discipline, creativity, and strong moral values.
            </p>

          </div>

        </div>

      </section>

      {/* CORE VALUES */}
      <section className="py-16 px-6 bg-gray-50">

        <h2 className="text-3xl font-bold text-center text-blue-900">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="font-bold text-blue-900">Discipline</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Building responsibility and respect in learners.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="font-bold text-blue-900">Excellence</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Striving for academic and personal greatness.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="font-bold text-blue-900">Faith</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Strong Christian foundation in learning.
            </p>
          </div>

        </div>

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
            <li className="hover:text-yellow-300 cursor-pointer transition">Activities</li>
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