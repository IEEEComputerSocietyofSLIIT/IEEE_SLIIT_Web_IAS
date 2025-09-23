import { useEffect, useState } from "react";
import "./styles/loader.css";

const Loader = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);
  const [scaleOut, setScaleOut] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 2000);
    const finishTimer = setTimeout(() => {
      setScaleOut(true);
      setTimeout(onComplete, 1200); // allow time for scale out
    }, 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div className={`loader-wrapper ${scaleOut ? "exit" : ""}`}>
      <div className="circle-group">
        {[...Array(6)].map((_, i) => (
          <div className={`circle delay-${i}`} key={i}></div>
        ))}
        {showText && <h1 className="loader-text">TechPulse</h1>}
      </div>
    </div>
  );
};

export default Loader;
