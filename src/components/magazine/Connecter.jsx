import React, { useState, useEffect } from "react";
import Table3D from "./Room";
import TechPulseMagazine from "./HomeText";
import MagazineDescription from "./MagazineDescription";
import Flipbook from "./Flipbook";
import MFlipbook from "./MFlipbook"; 
import "./styles/FloatingNav.css";
import ElectricBorder from "../ElectricBorder";
import ShinyText from "../ShinyText";
import ShinyParticles from "../ShinyParticles";
import "../ShinyText.css";

// Countdown target: Dec 13, 2025 15:30:00 (3:30 PM)
const TARGET_DATE = new Date(2025, 11, 13, 15, 30, 0);

function getTimeLeft(target) {
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

  const total = diff;
  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

const CountdownModal = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(TARGET_DATE));
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check immediately
    if (getTimeLeft(TARGET_DATE).total <= 0) {
      setIsVisible(false);
      return;
    }

    const timer = setInterval(() => {
      const remaining = getTimeLeft(TARGET_DATE);
      setTimeLeft(remaining);
      if (remaining.total <= 0) {
        setIsVisible(false);
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const { minutes, seconds } = timeLeft;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-white">
      <ShinyParticles count={20} />
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          <ShinyText text="Magazine Launching In..." speed={3} />
        </h2>
        
        <ElectricBorder color="#7df9ff" speed={1} chaos={0.3} thickness={2} style={{ borderRadius: 16, padding: '2rem' }}>
           <div className="flex items-center gap-4 md:gap-8">
              <TimeBox val={minutes} label="MINUTES" />
              <div className="text-4xl md:text-6xl font-bold pb-8">:</div>
              <TimeBox val={seconds} label="SECONDS" />
           </div>
        </ElectricBorder>
      </div>
    </div>
  );
};

const TimeBox = ({ val, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-lg text-6xl md:text-8xl font-mono font-bold min-w-[120px] md:min-w-[160px] text-center shadow-lg">
      {String(val).padStart(2, '0')}
    </div>
    <span className="text-sm md:text-base mt-4 tracking-widest text-gray-400">{label}</span>
  </div>
);

const MagazineViewer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [showFlipbook, setShowFlipbook] = useState(window.innerWidth <= 767);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 767;
      setIsMobile(mobile);
      setShowFlipbook(mobile); // show flipbook by default on mobile
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollComplete = (isAtEnd) => {
    if (isMobile) return;
    setShowFlipbook(isAtEnd); 
    setTransitioning(false);
  };

  return (
    <div className="w-screen">
      <CountdownModal />
      {/* Section 1: Landing */}
      <div style={{ height: "100vh" }}>
        <TechPulseMagazine />
      </div>

      {/* Section 2: Description */}
      <div style={{ height: "110vh", backgroundColor: "black" }}>
        <MagazineDescription />
      </div>

      {/* Section 3: Interactive */}
      <div
        style={{
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Desktop Only: Table3D */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              transition: "opacity 0.5s ease-in-out",
              opacity: transitioning || showFlipbook ? 0 : 1,
              pointerEvents: transitioning || showFlipbook ? "none" : "auto",
              zIndex: 1,
            }}
          >
            <Table3D onScrollComplete={handleScrollComplete} />
          </div>
        )}

        {/* Flipbook */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 1s ease-in-out",
            opacity: showFlipbook && !transitioning ? 1 : isMobile ? 1 : 0,
            pointerEvents: showFlipbook || isMobile ? "auto" : "none",
            zIndex: 2,
            marginTop: isMobile ? 0 : "100vh",
            backgroundColor: "#000",
          }}
        >
          {isMobile ? <MFlipbook /> : <Flipbook />}
        </div>
      </div>
    </div>
  );
};

export default MagazineViewer;
