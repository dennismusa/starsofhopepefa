import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Admissions from "./Components/Admissions";
import Contacts from "./Components/Contacts";
import Testimonials from "./Components/Testimonials";

// Scroll to top on route change
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/admissions" element={<Admissions />} />
  <Route path="/testimonials" element={<Testimonials />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/contact" element={<Contacts />} />
</Routes>
    </BrowserRouter>
  );
} 

export default AppWrapper;