import React from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import IntersectionObersever from "./components/IntersectionObersever";

function App() {
  return (
    <div className="App">
      <IntersectionObersever>
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </IntersectionObersever>
    </div>
  );
}

export default App;
