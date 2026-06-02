/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Admissions() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO WITH IMAGE */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">

        <img
          src={image1}
          alt="admissions"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center text-white max-w-3xl px-6">

          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
            Admissions Open
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold mt-4">
            Join Kimana Stars of Hope Schools
          </h1>

          <p className="mt-4 text-gray-200">
            Begin your child’s journey toward academic excellence, discipline,
            and holistic growth in a Christ-centered environment.
          </p>

        </div>
      </section>

      {/* INTRO WITH IMAGE SPLIT */}
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        <img
          src={image2}
          className="w-full md:w-1/2 h-[400px] object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
          alt="students"
        />

        <div className="md:w-1/2">

          <h2 className="text-3xl font-bold text-blue-900">
            Why Join Our School?
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We provide a safe, disciplined, and Christ-centered learning environment
            where learners grow academically, socially, and spiritually.
          </p>

          <div className="mt-6 space-y-4">

            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              ✔ CBC-Based Quality Education
            </div>

            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              ✔ Highly Qualified Teachers
            </div>

            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              ✔ Strong Moral & Spiritual Guidance
            </div>

          </div>

        </div>
      </section>

      {/* ADMISSION STEPS WITH IMAGES */}
      <section className="py-20 bg-white px-6">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Admission Process
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* STEP 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={image3} className="h-48 w-full object-cover" />

            <div className="p-6">
              <h3 className="font-bold text-blue-900 text-lg">
                1. Application
              </h3>
              <p className="text-gray-600 mt-2">
                Fill in the admission form online or at the school office.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={image2} className="h-48 w-full object-cover" />

            <div className="p-6">
              <h3 className="font-bold text-blue-900 text-lg">
                2. Assessment
              </h3>
              <p className="text-gray-600 mt-2">
                Learners may undergo a placement assessment depending on level.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={image1} className="h-48 w-full object-cover" />

            <div className="p-6">
              <h3 className="font-bold text-blue-900 text-lg">
                3. Enrollment
              </h3>
              <p className="text-gray-600 mt-2">
                Complete registration and join the school community.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-20 text-white text-center">

        <img
          src={image1}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 px-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            Start Your Child’s Future Today
          </h2>

          <p className="mt-3 text-gray-200">
            Join a school that builds discipline, excellence, and faith.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">

            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
              Download Form
            </button>

            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Contact Us
            </button>

          </div>

        </div>
      </section>
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