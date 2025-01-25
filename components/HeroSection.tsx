import React, { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

const HeroSection = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.4)" }}
      >
        <source
          src="https://videos.pexels.com/video-files/5940059/5940059-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div>
          <h1
            className="text-4xl md:text-6xl text-white mb-6"
            style={{ fontFamily: "Courier New, monospace" }}
          >
            {showTypewriter && (
              <TypewriterComponent
                options={{
                  strings: [
                    "read a book, expand your mind",
                    "knowledge is power",
                    "discover new worlds through reading",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60, // Slower typing speed
                  deleteSpeed: 60, // Slower deletion speed
                }}
              />
            )}
          </h1>
          <a
            href="#books"
            className="bg-red-600 text-green px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            style={{
              fontFamily: "Courier New, monospace",
              backgroundColor: "transparent",
              color: "red",
              border: "2px solid red",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            Explore Books
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
