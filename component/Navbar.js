"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
function Navbar() {
  const [MenuOpen,setMenuOpen]=useState(null);
  return (
    <div className="">
    <div className="flex px-8 py-4  justify-between items-center overflow-hidden">
      <div className="hidden lg:flex">
        <ul>
          <li>
            <Link href="/" className="hover:text-amber-100 text-lg font-bold whitespace-nowrap">
              SHUBHAM KUMAR.
            </Link>
          </li>
        </ul>
      </div>

       <ul className="w-full hidden sm:flex justify-center lg:justify-end space-x-25 p-2">
        <li>
          <Link href="/" className="hover:text-amber-100   text-sm">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-amber-100   text-sm">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-amber-100   text-sm">
            CONTACT US
          </Link>
        </li>
        <li>
          <Link href="/skills" className="hover:text-amber-100   text-sm">
            SKILLS
          </Link>
        </li>
      </ul>
       <button
          onClick={() => setMenuOpen(true)}
          className="sm:hidden text-white text-2xl absolute top-4 right-4"
        >
          ☰
        </button>
    </div>
    {MenuOpen && (
        <motion.div  className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center space-y-8"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.4 }}>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-3xl"
          >
            ✕
          </button>

          <ul className="space-y-8 text-2xl">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>HOME</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
            </li>
            <li>
              <Link href="/skills" onClick={() => setMenuOpen(false)}>SKILLS</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
