import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "/", name: "Home" },
    { id: "/about", name: "About Us" },
    { id: "/admissions", name: "Admissions" },
    { id: "/Gallery", name: "Gallery" },
    { id: "/contact", name: "Contact" },
  ];

  const goTo = (path) => {
    setActive(path);
    setOpen(false);
    navigate(path);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
        scrolled ? "bg-blue-900 shadow-lg" : "bg-transparent backdrop-blur-md"
      } text-white`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">

        <h1 className="font-extrabold text-xl">
          Kimana Stars of Hope Schools
        </h1>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

          {navLinks.map((item) => (
            <li
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`cursor-pointer ${
                active === item.id ? "text-yellow-400" : ""
              }`}
            >
              {item.name}
            </li>
          ))}

          <li>
            <button
              onClick={() => goTo("/admissions")}
              className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold"
            >
              Apply Now
            </button>
          </li>
        </ul>

        {/* MOBILE */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 bg-blue-900 p-5">
          {navLinks.map((item) => (
            <li
              key={item.id}
              onClick={() => goTo(item.id)}
              className="cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;