"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});
export default function Home() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTypewriter(true);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timeout); // cleanup
  }, []);
  return (
    <>
      <div className="max-w-8xl mx-auto w-full px-4 sm:px-8 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between  lg:min-h-[calc(90vh-60px)]  px-4 sm:px-8 lg:px-8 py-8 gap-4 ">
        {/* Left Section */}
        <div className="text-left w-full lg:w-1/2 space-y-4">
          <div className="font-semibold text-5xl sm:text-5xl mb-4 text-white text-center lg:text-left ">
            Hello, Everyone
          </div>

          <div
            className={`${inter.className} text-center sm:text-left sm:text-lg md:text-xl font-light space-y-4 flex flex-col text-white`}
          >
            <p>
              I'm a full-stack developer specializing in building scalable and high-performance web applications with React and Next.js. With a strong foundation in front-end architecture and backend integration, I craft clean, maintainable code and deliver user-focused solutions.
            </p>
           
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center mt-4 w-full lg:w-1/2">
          <div
            style={{
              color: "white",
              textShadow: "0 0  #ffffff, 0 0 4px #00f6ff, 0 0  #00f6ff",
            }}
            className={`${dancingScript.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic`}
          >
            Shubham Kumar
          </div>
          <div className="text-lg sm:text-xl text-cyan-400 mt-2">
            I'M A{" "}
            <Typewriter
              words={[
                "FULL STACK DEVELOPER",
                "AI/ML SPECIALIST",
                "CODER",
                "OPEN SOURCE CONTRIBUTOR",
                "TECH ENTHUSIAST",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={150}
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
