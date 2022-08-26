import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';





function App() {
  return (
    <div>
      <Navigation /> 
      <Header />
      <AboutMe />
      <Projects />
      {/* <Contact /> */}

    </div>
  );
}

export default App;
