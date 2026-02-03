import { useState } from "react";

import Navbar from "./UI/Navbar";
import MobileMenu from "./UI/MobileMenu";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import "./index.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
