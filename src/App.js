import React from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
