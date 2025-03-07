import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ percentage, image, title }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= percentage) {
          clearInterval(interval);
          return percentage;
        }
        return prev + 1; // Adjust speed by changing increment value
      });
    }, 20); // Adjust speed by changing interval time (smaller = faster)

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="flex flex-col items-center">
      {/* Define the Gradient */}
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#00A0FA" />
            <stop offset="100%" stopColor="#0500FD" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-32 h-32 relative">
        {/* Circular Progress Bar */}
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            pathColor: "url(#gradient)", // Gradient path color
            trailColor: "#333", // Dark background
            strokeLinecap: "round",
          })}
        />

        {/* Centered Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={image} alt="Icon" className="w-10 h-10" />
        </div>
      </div>

      {/* Animated Percentage and Title Below */}
      <p className="bg-gradient-to-r from-[#00A0FA] to-[#0500FD] bg-clip-text text-transparent font-bold font-lato text-2xl mt-4">{progress}%</p>
      <p className="text-[#959595] font-medium font-lato text-lg mt-1">{title}</p>
    </div>
  );
};

export default CircularProgress;
