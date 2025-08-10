// 'use client'
import React from 'react'

function Footer() {
  return (
    <>
    <div className="flex h-[60px] items-center justify-center space-x-6 bg-[#141212]  text-white text-center  bottom-0 ">
      <p className="text-sm text-gray-400">© 2025 Shubham Kumar. All rights reserved.</p>
      <a href="https://leetcode.com/u/ShubhamKumar13504/" target="_blank" rel="noopener noreferrer">
      <img src="/l.png" alt="gitID" className='h-10 w-10 transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_#00f6ff]' />
      </a>
      <a href="https://github.com/shubhamkumar13504/" target="_blank" rel="noopener noreferrer">
      <img src="/giti.png" alt="gitID" className='h-10 w-10 transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_#00f6ff]' />
      </a>
      <a href="https://www.linkedin.com/in/shubham-kumar13504" target="_blank" rel="noopener noreferrer">
      <img src="/li.png" alt="gitID" className='h-10 w-10 transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_#00f6ff]' />
      </a>
    </div>
      
    </>

  )
}

export default Footer
