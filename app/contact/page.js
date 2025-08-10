"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
function page() {
  // const boxRef = useRef(null);
  const [clutter, setClutter] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  useEffect(() => {
    let c = "CONTACT US!!!";
    setClutter(c.split(""));
  }, []);
  useEffect(() => {
    const letters = gsap.utils.toArray(".letter");

    gsap.from(letters, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
    });
  }, [clutter]);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between  ">
        <div className="w-full lg:w-1/2 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px]">
          {/* <div className="w-full text-center " ref={containerRef}> */}
          <div className="w-full text-center ">
            {clutter.map((letter, index) => (
              <span
                key={index}
                className="inline-block letter lg:text"
                onMouseEnter={(e) => {
                  gsap.to(e.target, {
                    y: -10,
                    scale: 1.2,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                  gsap.to(e.target, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.in",
                    delay: 0.3,
                  });
                }}
              >
                 {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 sm:w-3/4 h-[600px] sm:h-[650px] lg:h-[700px] flex justify-center ">
          <form
            onSubmit={handleSubmit}
            className=" w-full flex flex-col justify-center space-y-4 p-6  "
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded h-32 flex-grow resize-none"
            />
            <button
              type="submit"
              className="w-full cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>
            {status && <p className="text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
