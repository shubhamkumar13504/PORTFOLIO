"use client";
import React from "react";
import Image from "next/image"; // Optional if using Next.js Image component
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
function Page() {
  return (
    <>
   
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-10 max-w-7xl mx-auto">
      {/* === Left: Introduction === */}
      <div className="w-full md:w-1/2 text-left space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Hi, I&apos;m SHUBHAM KUMAR
        </h1>
        <p className="text-gray-300 text-base md:text-lg">
          I&apos;m a passionate front-end developer with experience in React,
          Next.js, and building beautiful, responsive UIs.
        </p>
        <p className="text-gray-400 text-sm">
          I love design, animation, and bringing ideas to life on the web.
        </p>
      </div>

      {/* === Right: Image === */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="/me.jpg"
          alt="My photo"
          className="h-[300px] w-[300px] rounded-full object-cover shadow-lg"
        />
      </div>
      
    </div>
    <div className=" flex flex-col md:flex-row justify-center mt-10 gap-10 items-center">
    <div className="flex flex-col items-center">
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={85}
        text={`85%`}
        styles={buildStyles({
          textColor: 'white',
          pathColor: '#22c55e',
          trailColor: '#1f2937',
        })}
      />
    </div>
    <p className="mt-2 text-white text-sm">PYTHON</p>
  </div>
   <div className="flex flex-col items-center">
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={87}
        text={`87%`}
        styles={buildStyles({
          textColor: 'white',
          pathColor: '#22c55e',
          trailColor: '#1f2937',
        })}
      />
    </div>
    <p className="mt-2 text-white text-sm">C</p>
  </div>
   <div className="flex flex-col items-center">
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={90}
        text={`90%`}
        styles={buildStyles({
          textColor: 'white',
          pathColor: '#22c55e',
          trailColor: '#1f2937',
        })}
      />
    </div>
    <p className="mt-2 text-white text-sm">JavaScript</p>
  </div>
   <div className="flex flex-col items-center">
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={89}
        text={`89%`}
        styles={buildStyles({
          textColor: 'white',
          pathColor: '#22c55e',
          trailColor: '#1f2937',
        })}
      />
    </div>
    <p className="mt-2 text-white text-sm">React</p>
  </div>
    </div>
     </>
  );
}

export default Page;
