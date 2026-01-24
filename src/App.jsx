import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
