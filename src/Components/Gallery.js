import {
  FaCamera,
  FaGraduationCap,
  FaTrophy,
  FaStar,
  FaImages,
} from "react-icons/fa";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";

export default function Gallery() {
  const galleryImages = [
    {
      image: image1,
      title: "Graduation Ceremony",
      desc: "Celebrating our learners as they successfully complete their academic journey with confidence and excellence.",
    },

    {
      image: image2,
      title: "Classroom Learning",
      desc: "Interactive CBC-based learning sessions that nurture creativity, leadership, and innovation.",
    },

    {
      image: image3,
      title: "Sports Activities",
      desc: "Students actively participating in athletics, football, and teamwork-building activities.",
    },

    {
      image: image4,
      title: "Academic Excellence",
      desc: "Recognizing outstanding academic performers and encouraging learners to achieve greatness.",
    },

    {
      image: image5,
      title: "School Events",
      desc: "Capturing memorable school celebrations, performances, and educational experiences.",
    },

    {
      image: image6,
      title: "Music & Drama",
      desc: "Nurturing talents through music, dance, drama, and creative performances.",
    },

    {
      image: image7,
      title: "Library & Research",
      desc: "Promoting a strong reading culture and independent learning among learners.",
    },

    {
      image: image8,
      title: "Graduation Moments",
      desc: "Special graduation memories that inspire learners to pursue their dreams with confidence.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-red-900 text-white py-24 px-6 overflow-hidden">

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <div className="flex justify-center mb-6">
            <div className="bg-yellow-500/20 border border-yellow-400/40 px-5 py-2 rounded-full flex items-center gap-2">
              <FaImages className="text-yellow-400" />
              <span className="text-sm font-medium">
                School Gallery & Achievements
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Our School <span className="text-yellow-400">Gallery</span>
          </h1>

          <p className="mt-6 text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto">
            Explore memorable moments, graduation celebrations, academic
            achievements, co-curricular activities, and inspiring experiences
            from Kimana Stars of Hope Schools.
          </p>

        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-900 text-2xl">
              <FaGraduationCap />
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mt-6">
              Graduation Moments
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              We celebrate every learner’s journey and achievements through
              colorful graduation ceremonies filled with joy, pride, and
              inspiration.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

            <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center text-yellow-600 text-2xl">
              <FaTrophy />
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mt-6">
              School Achievements
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Our learners continue to excel academically, socially, and in
              sports, showcasing discipline, creativity, and excellence.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

            <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center text-red-700 text-2xl">
              <FaCamera />
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mt-6">
              Captured Memories
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Every image tells a story of growth, teamwork, talent, leadership,
              and unforgettable experiences within our school community.
            </p>

          </div>

        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-extrabold text-blue-900">
              School Memories & Activities
            </h2>

            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
              Discover the vibrant life at Kimana Stars of Hope Schools through
              our collection of educational, social, spiritual, and co-curricular moments.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              >

                {/* IMAGE */}
                <div className="overflow-hidden relative">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition duration-500">

                    <div className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                      <FaStar />
                      Featured
                    </div>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6 text-left">

                  <h3 className="text-xl font-bold text-blue-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ACHIEVEMENT SECTION */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-red-900 text-white py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-extrabold text-yellow-400">
              500+
            </h2>
            <p className="mt-3 text-gray-200 text-lg">
              Successful Learners
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-yellow-400">
              20+
            </h2>
            <p className="mt-3 text-gray-200 text-lg">
              School Activities
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-yellow-400">
              100%
            </h2>
            <p className="mt-3 text-gray-200 text-lg">
              Commitment to Excellence
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-red-950 via-red-900 to-red-800 text-white">

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

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-semibold mb-4 border-b border-red-700 pb-2">
              Quick Links
            </h3>

            <ul className="space-y-3 text-red-100">
              <li className="hover:text-yellow-300 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-yellow-300 cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-yellow-300 cursor-pointer transition">
                Admissions
              </li>

              <li className="hover:text-yellow-300 cursor-pointer transition">
                Gallery
              </li>
            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-semibold mb-4 border-b border-red-700 pb-2">
              Contact Us
            </h3>

            <div className="space-y-3 text-red-100">

              <p>📍 Kimana, Kajiado County, Kenya</p>
              <p>📞 0794 749273</p>
              <p>📧 kimanastarsofhope2021@gmail.com</p>

            </div>

          </div>

        </div>

        <div className="border-t border-red-700 text-center py-5 text-red-200 text-sm">
          © {new Date().getFullYear()} Kimana Stars of Hope Schools. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}