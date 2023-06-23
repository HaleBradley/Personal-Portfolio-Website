import React from "react";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
