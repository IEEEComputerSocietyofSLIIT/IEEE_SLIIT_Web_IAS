import React from "react";
import "./styles/HeroText.css";
import StarParticles from "./extras/starparticles"; // make sure the path is correct

const MagazineDescription = () => {
  return (
    <div
      className="magazine-wrapper"
      style={{
        position: "relative",
        width: "100%",
        padding: "40px 20px",
        overflow: "hidden",
      }}
    >
      {/* Star Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <StarParticles />
      </div>

      {/* Main Content */}
      <div
        className="magazine-description"
        style={{
          backgroundColor: "#12121250",
          padding: "30px",
          color: "white",
          position: "relative",
          zIndex: 1, // ✅ higher than particles
          marginTop: "5%",
        }}
      >
        <p>
          Welcome to the first edition of{" "}
          <span className="gradient-text">TECHPULSE</span>—the official magazine
          of the <br />{" "}
          <span className="glow-effect">
            IEEE Industry Applications Society (IAS) Student Branch Chapter of
            SLIIT
          </span>
          .<br /> It is with great pride{" "}
          <span className="emoji-bounce"></span> that we present this premiere
          issue, marking a significant milestone{" "}
          <span className="emoji-bounce"></span> in our journey to unite{" "}
          <span className="rotate-letters">
            {"technology enthusiasts".split("").map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${5 + index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span className="emoji-bounce"></span> under one vibrant platform.{" "}
          <span className="emoji-bounce"></span>
          <br /> This isn't just a magazine, it’s a{" "}
          <span className="blood">  pulse check     </span>{" "}
          <span className="emoji-bounce"></span> on our progress, our passion
          for innovation <span className="emoji-bounce">💡</span>, and our
          vision for the future{" "}
          <span className="emoji-bounce">🚀</span>.
        </p>
      </div>
    </div>
  );
};

export default MagazineDescription;
