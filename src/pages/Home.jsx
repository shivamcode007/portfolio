import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import profile from "../assets/portfolio-image.jpg"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate()
  return (
    <div className=' bg-black text-white min-h-screen p-4 md:flex justify-center items-center '>
      <div className=" text-center md:text-left md:w-1/2 flex flex-col justify-center">
        <div className=''>
        <p className='text-purple-600 text-lg'>👋 Hello, I'm</p>
        <h1 className='text-4xl font-bold'>Shivam <span className=''>Kumar</span></h1>
        <h2 className=' text-purple-600 text-lg'>MERN Stack Developer</h2>
        <p className='text-gray-400 mt-6 text-lg'>
          I build modern, fast and responsive websites using React, Express.js, Node.js and MongoDB.
        </p>
        </div>
        <div className='flex flex-col md:flex-row gap-4 mt-8 flex-wrap bg-black'>
       <button className='bg-purple-600 hover:bg-purple-700 text-lg text-white px-2 py-1  rounded'>
         Hire Me <span>→</span>
       </button>
       <button onClick={()=>navigate("/projects")} className='bg-gray-600 hover:bg-gray-700 text-lg text-white px-2 py-1 rounded'>
         View Projects <span>→</span>
       </button>
       </div>
       <p className="text-gray-400 mt-6 text-lg">
         Contact with me
       </p>
       <div className='flex justify-center gap-4 mt-8 flex-wrap bg-black'>
          <a href="https://github.com/shivamcode007" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yuvraj-kumar-326272320?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
            <FaLinkedin />
          </a>
           <a href="https://www.instagram.com/yuvrazrazputt?igsh=b2Q2bGNlbjYxc283" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
            <FaInstagram />
          </a>
       </div>
      </div>
      <div className=" flex justify-center pt-15">
        <div className=" bg-yellow-300 w-60 h-60 rounded-full flex items-center justify-center">
          <img src={profile} alt="Profile" className="w-56 h-56 rounded-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Home



