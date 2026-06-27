"use client";

import PortfolioClient from "./PortfolioClient";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

export default function PortfolioShell() {
  return (
    <>
      <PortfolioClient />
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
      <div className="spotlight" id="spotlight"></div>
      <nav id="navbar">
        <div className="nav-logo">SC.</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Hire Me</a>
        <button className="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className="mob-menu" id="mobMenu">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Hire Me</a>
      </div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}
