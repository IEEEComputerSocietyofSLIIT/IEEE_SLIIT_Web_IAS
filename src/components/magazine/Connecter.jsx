import React, { useState, useEffect } from "react";
import Table3D from "./Room";
import TechPulseMagazine from "./HomeText";
import MagazineDescription from "./MagazineDescription";
import Flipbook from "./Flipbook";
import MFlipbook from "./MFlipbook"; 
import "./styles/FloatingNav.css";

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
