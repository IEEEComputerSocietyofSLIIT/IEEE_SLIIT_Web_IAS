import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ElectricBorder from "./ElectricBorder";
import ShinyText from './ShinyText';
import ShinyParticles from './ShinyParticles';
import './ShinyText.css';

// Countdown to Oct 23, 2025 00:00:00 (local time)
const TARGET_DATE = new Date(2025, 9, 23, 0, 0, 0); // months are 0-indexed: 9 = October

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

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(TARGET_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(TARGET_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes } = timeLeft;

  return (
    <div className="bg-black flex flex-col items-center justify-center text-center text-white px-4 min-h-screen relative">
      {/* Back to home button top-left */}
      <div className="absolute top-4 left-4 z-30">
        <Link to="/" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/8 hover:bg-white/12 text-sm md:text-base">
          ← To Home
        </Link>
      </div>
      {/* particles overlay (placed inside this relative container) */}
      <ShinyParticles count={24} />

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 text-center relative z-20 px-2">
        <ShinyText text="IEEE Magazine Launch" speed={4} />
      </h1>
      <div className="flex items-center justify-center">
        <ElectricBorder color="#7df9ff" speed={1} chaos={0.5} thickness={2} style={{ borderRadius: 16 }}>
          <div className="max-w-4xl w-full bg-white/5 backdrop-blur-md rounded-xl p-6 md:p-10 text-center shadow-xl relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-end justify-center mb-6 sm:mb-8">
              <TimeBoxLarge label="DAYS" value={days} />
              <TimeBoxLarge label="HOURS" value={hours} />
              <TimeBoxLarge label="MINUTES" value={minutes} />
            </div>

            {timeLeft.total <= 0 ? (
              <div className="text-green-400 font-bold text-2xl">The magazine is now available!</div>
            ) : (
              <div className="mt-4 text-gray-200 text-lg">Magazine will release on IEEE Day — October 23.</div>
            )}
          </div>
        </ElectricBorder>
      </div>
    </div>
  );
}

function TimeBoxLarge({ label, value }) {
  const display = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-white/10 backdrop-blur rounded-lg px-6 py-5 sm:px-6 sm:py-6 min-w-[110px] sm:min-w-[140px] flex items-center justify-center shadow-lg">
        <div className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-mono tracking-wider">{display}</div>
      </div>
      <div className="mt-2 sm:mt-3 text-xs sm:text-sm tracking-widest text-gray-300">{label}</div>
    </div>
  );
}
