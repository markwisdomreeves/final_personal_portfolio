import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/project/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="main_app_container">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
