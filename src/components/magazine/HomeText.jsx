import { useRef } from "react";
import cover from "./resouses/cover.jpg";
import "./styles/text.css";
import Hyperspeed from "./extras/Hyperspeed";
import SplitText from "./extras/SplitText";
import StarParticles from "./extras/starparticles";
import TiltedCard from "./extras/TiltedCard";

const TechPulseMagazine = ({ onContinue }) => {
  const headerRef = useRef(null);

  const handleAnimationComplete = () => {
    console.log("SplitText animation complete!");
  };

  return (
    <div
      className="techpulse-wrapper"
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Back Button */}
      <a
        href="https://ias.ieeesliit.com/"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "bold",
          transition: "background 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#38B6FF")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)")
        }
      >
        ← Back
      </a>

      {/* Cursor and Stars */}
      <StarParticles />

      {/* Background Effects */}
      <div
        className="hyperspeed-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>

      {/* Main Content */}
      <div
        className="techpulse-container"
        style={{
          paddingTop: "100px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Cover Image */}
        <div
          className="image-wrapper"
          style={{
            margin: "0 auto",
            width: "300px",
            height: "400px",
            marginTop: "-20px",
            marginBottom:"150px",
          }}
        >
          <TiltedCard
            imageSrc={cover}
            altText="TechPulse Magazine Cover"
            captionText="TechPulse Magazine"
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>

        {/* Title */}
        <div
          ref={headerRef}
          className="magazine-header scroll-header"
          style={{ marginTop: "50px" }}
        >
          <SplitText
            text={
              <>
                TECH
                <span style={{ color: "#38B6FF" }}>PULSE</span>
              </>
            }
            className="text-gradient"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default TechPulseMagazine;
