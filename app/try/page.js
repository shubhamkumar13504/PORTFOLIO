'use client';

import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillProgress = ({ value, label }) => {
  const [currentValue, setCurrentValue] = useState(0);

  const handleMouseEnter = () => {
    let start = 0;
    const step = () => {
      start += 1;
      if (start <= value) {
        setCurrentValue(start);
        requestAnimationFrame(step);
      }
    };
    step();
  };

  const handleMouseLeave = () => {
    setCurrentValue(0); // Reset when mouse leaves (optional)
  };

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={currentValue}
          text={`${currentValue}%`}
          styles={buildStyles({
            textColor: 'white',
            pathColor: '#22c55e',
            trailColor: '#1f2937',
          })}
        />
      </div>
      <p className="mt-2 text-white text-sm">{label}</p>
    </div>
  );
};

const page = () => {
  return (
    <div>
      {/* <div className="flex items-center justify-center h-screen">
      <div className="w-full flex justify-between items-center px-8 py-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white z-0 " />

       <div className="relative z-10 flex flex-col items-center">
  <div className="h-20 w-[2px] bg-white mb-0"></div>
  <Droplet className="w-12 h-10 text-yellow-400" />

  <div className="relative flex flex-col items-center">
    
    <p className="peer mt-2 text-white text-sm cursor-pointer px-4 py-2 bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300">
      INTRODUCTION
    </p>

    
    <div className="invisible opacity-0 peer-hover:visible peer-hover:opacity-100 absolute top-full mt-2 left-4 w-[300px] p-4 pl-4 rounded-md shadow-lg border text-black bg-gradient-to-br from-purple-500 to-blue-500 text-sm transition-all duration-300 flex items-center z-20">
      <div className="flex items-center space-x-1">
        <p className="text-left text-amber-50">
          👋 Hi, I'm Shubham Kumar from Gaya, Bihar — a Computer Science
          student with a strong interest in full-stack development. I'm
          skilled in React, Tailwind CSS, JavaScript, and tools like Git
          and Node.js.
        </p>
        <img
          src="/mypic.png"
          alt="Shubham"
          className="w-30 rounded-md"
        />
      </div>
    </div>
  </div>
</div>



        <div className="relative flex flex-col-reverse items-center">
          <div className="h-20 w-[2px] bg-white mt-0"></div>
          <Droplet className="w-12 h-10 text-yellow-400 rotate-180" />
          <div className="flex flex-col items-center justify-center">
            <p className="peer mt-2 text-white text-sm cursor-pointer px-4 py-2 bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300 ">
              QUALIFICATIONS
            </p>
            <div className=" flex opacity-0 peer-hover:opacity-100 absolute bottom-full mb-2  w-[360px] p-4 pr-6 rounded-md shadow-lg border text-black bg-gradient-to-br from-purple-500 to-blue-500  text-sm transition-opacity duration-300 z-10">
              <div className="flex items-center space-x-2">
                <p className="text-left text-amber-50 w-2/3">
                  I am currently pursuing a Bachelor of Technology (B.Tech) in
                  Computer Science Engineering from IILM University. Prior to
                  this, I completed my 12th grade and my 10th grade from DAV
                  Public School with an aggregate of 90.2% and 92% respectively.
                </p>
                <div className="flex flex-col space-y-2 ">
                  <img
                    src="/iilm.png"
                    alt="IILM"
                    className="w-24 h-auto rounded-md shadow"
                  />
                  <img
                    src="/dav.png"
                    alt="DAV"
                    className="w-24 h-auto rounded-md shadow"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center ">
          <div className="h-20 w-[2px] bg-white mb-0"></div>
          <Droplet className="w-12 h-10 text-yellow-400" />
          <div className=" flex flex-col items-center justify-center">
            <p className="peer mt-2 text-white text-sm cursor-pointer px-4 py-2 bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300 " >
              SKILLS
            </p>
            <div className="opacity-0 peer-hover:opacity-100 absolute top-full mt-2 right-4  w-[300px]  pl-4  border text-black bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-md shadow-lg text-sm transition-opacity duration-300 flex  items-center">
              <div className="flex items-center space-x-1">
                <p className="text-center text-amber-50  ">
                  I have a strong foundation in web development and programming, with hands-on experience in Next.js and React for building dynamic front-end applications. I’m also skilled in JavaScript, Python, and C, which provide me with a solid base in both scripting and structured programming. For database management, I’m proficient in SQL for relational databases and MongoDB for NoSQL solutions.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col-reverse items-center">
          <div className="h-20 w-[2px] bg-white mt-0"></div>
          <Droplet className="w-12 h-10 text-yellow-400 rotate-180" />
          <div className=" flex flex-col items-center justify-center">
            <p className="peer mt-2 text-white text-sm cursor-pointer px-4 py-2 bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300 ">
              PROJECTS
            </p>
            <div className="flex opacity-0 peer-hover:opacity-100 absolute bottom-full mb-2 right-4 w-[360px] p-4 pr-6 rounded-md shadow-lg border text-black bg-gradient-to-br from-purple-500 to-blue-500  text-sm transition-opacity duration-300 z-10">
              <div className="flex items-center space-x-2">
                <p className="text-center text-amber-50 w-full">
                  I have worked on impactful projects such as an Air Verification System, designed to monitor and validate air quality parameters in real-time using sensor data and automation. In another project, I developed a Disease Diagnosis System using Machine Learning, which utilizes classification algorithms to predict the likelihood of diseases based on patient symptoms and health data — helping in early detection and diagnosis.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>*/}
     <div className="flex justify-center mt-10 space-x-10 items-center">
      <SkillProgress value={85} label="HTML" />
      <SkillProgress value={87} label="CSS" />
      <SkillProgress value={90} label="JavaScript" />
      <SkillProgress value={89} label="React" />
    </div>
    </div>
  )
}

export default page
