import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import MagazineViewer from "./components/magazine/Connecter"; 
import './App.css';


// Home Page Layout
const Home = () => {
  return (
    <div className="home-page">
      <Header />      {/* Only for home */}
      <Hero />
      <About />
      <Team />
      <Contact />
    </div>
  );
};

const MagazinePage = () => {
  return (
    <div className="magazine-page">
      <MagazineViewer />  {/* Magazine-specific layout */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magazine" element={<MagazinePage />} />
      </Routes>
    </Router>
  );
}

export default App;
