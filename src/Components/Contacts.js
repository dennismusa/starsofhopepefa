/* eslint-disable jsx-a11y/anchor-is-valid */
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden">

        <img
          src={image1}
          alt="contact hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">

          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
            Get In Touch
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold mt-4">
            Contact Kimana Stars of Hope Schools
          </h1>

          <p className="mt-4 text-gray-200">
            We are always ready to assist parents, guardians, and students.
          </p>

        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8">

          {/* PHONE */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">

            <div className="text-4xl">📞</div>
            <h3 className="text-xl font-bold text-blue-900 mt-4">Phone</h3>
            <p className="text-gray-600 mt-2">0794 749273</p>

          </div>

          {/* EMAIL */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">

            <div className="text-4xl">✉️</div>
            <h3 className="text-xl font-bold text-blue-900 mt-4">Email</h3>
            <p className="text-gray-600 mt-2">
              kimanastarsofhope2021@gmail.com
            </p>

          </div>

          {/* LOCATION */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">

            <div className="text-4xl">📍</div>
            <h3 className="text-xl font-bold text-blue-900 mt-4">Location</h3>
            <p className="text-gray-600 mt-2">
              Kimana Town, Kajiado County, Kenya
            </p>

          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="px-6 pb-20">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Find Us in Kimana
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-xl">

            <iframe
              title="Kimana Location"
              src="https://www.google.com/maps?q=Kimana,Kenya&output=embed"
              width="100%"
              height="450"
              className="border-0"
              loading="lazy"
            ></iframe>

          </div>

        </div>
      </section>

      {/* MESSAGE / CTA */}
      <section className="relative py-20 text-center text-white">

        <img
          src={image2}
          className="absolute inset-0 w-full h-full object-cover"
          alt="cta"
        />

        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 px-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            Need More Information?
          </h2>

          <p className="mt-3 text-gray-200">
            Reach out to us anytime — we respond quickly.
          </p>

          <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
            Send Message
          </button>

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