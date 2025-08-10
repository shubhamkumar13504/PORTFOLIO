"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/hover-effect"
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
gsap.registerPlugin(ScrollTrigger);
function Page() {
  const letterRefs = useRef([]);
  const pathRef = useRef(null);
  const [letter, setletter] = useState([]);
  useEffect(() => {
    // Animate the path drawing using stroke-dasharray
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power1.in",
    });
  }, []);
  useEffect(() => {
    let c = "SKILLS";
    setletter(c.split(""));
  }, []);
  useEffect(() => {
    // if (letterRefs.current.length === 0) return;

    letterRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          attr: { y: 75 }, // animate from y + 20 (original y is 55)
          opacity: 0,
        },
        {
          attr: { y: 51 },
          opacity: 1,
          delay: i * 0.05,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    });
  }, [letter]);
  
  return (
    <div className="overflow-x-hidden">
      
      <div className="flex items-center justify-center ">
        <div className="mb-1">
          <svg width="700" height="250" viewBox="0 0 160 78">
            <path
              ref={pathRef}
              d="M49,60 C20,30 100,6 122,45 C137,80 20,70 49,40"
              fill="none"
              stroke="white"
              strokeWidth="0.2"
            />
            <text
              fill="white"
              fontSize="12px"
              textAnchor="middle"
              alignmentBaseline="middle"
              x='83'
              y='48'
            >
              {letter.map((char, i) => (
                <tspan
                  key={i}
                  ref={(el) => (letterRefs.current[i] = el)}
                  x={62 + i * 8} // adjusted spacing
                  
                >
                  {char}
                </tspan>
              ))}
            </text>
            </svg>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>

      <div className="relative w-full overflow-hidden   ">
        <div className="  flex flex-col w-full justify-center items-center text-white text-center text-3xl z-50">
          <div>CERTIFICATIONS </div>
          
          <div className="max-w-[350px] md:max-w-2xl lg:max-w-2.5xl mx-auto px-4">
            <Carousel>
              <CarouselContent>
                <CarouselItem><img src="/cer1.png" alt="" /></CarouselItem>
                <CarouselItem><img src="/cer2.png" alt="" /></CarouselItem>
                <CarouselItem><img src="/cer3.png" alt="" /></CarouselItem>
              </CarouselContent>
              <CarouselPrevious variant={null} className=" bg-blue-600 text-white hover:bg-blue-700 w-10 h-10" />
              <CarouselNext variant={null} className=" bg-blue-600 text-white hover:bg-blue-700 w-10 h-10" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Page;
export const projects = [
  {
    title: "JAVASCRIPT",
    description:
      "I have extensive experience building dynamic web applications using JavaScript.",
    
    image:'/js.jpg'
  },
  {
    title: "PYTHON",
    description:
      " I’ve developed robust backend systems and scripts with Python for various applications.",
    
    image:'/py.png'
  },
  {
    title: "REACT.JS",
    description:
      "I have strong experience creating responsive UIs and components with React.",
    
    image:'/react.png'
  },
  {
    title: "C",
    description:
      " I’ve developed efficient low-level programs and algorithms using C.",
    
    image:'/c.png'
  },
  {
    title: "NEXT.JS",
    description:
      "I’ve built performant, server-side rendered web apps using Next.js.",
    
    image:'/nextjs.png'
  },
  {
    title: "MongoDB",
    description:
      "I’ve worked with MongoDB to design and manage scalable NoSQL databases.",
    
    image:'/db1.png'
  },
];

