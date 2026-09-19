import React from 'react'
import { MdCastForEducation } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { MdOutlineModeStandby } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import profile from "../assets/portfolio-image.jpg"


const About = () => {
  return (
    <div className=' bg-black text-white min-h-screen p-4 '>
      <div>
        <div className=' md:grid grid-cols-2 items-center gap-4'>
          <div>
          <div className=' max-w-2xl mx-auto'>
            <h1 className=' text-purple-800'>About Me</h1>
            <p className="mt-3 text-gray-300 text-sm md:text-lg leading-relaxed ">
              I'm a passionate Full Stack Developer who enjoys building
              modern, scalable and visually appealing web applications.
              I love turning ideas into interactive digital experiences
              using React, Tailwind CSS, Node.js and MongoDB.
            </p>
          </div>

          <div className=' grid md:grid-cols-2 sm:gap-x-25 items-center mt-4'>
            <div className=' flex items-center gap-1 mt-4'>
              <span className=' text-5xl bg-gray-800 rounded-lg text-purple-800 hover:text-purple-400'><CiUser /></span>
              <div>
                <h5 className=' text-lg'>Name</h5>
                <p className="text-gray-300 text-sm">Shivam Kumar</p>
              </div>
            </div>
            <div className=' flex items-center gap-1 mt-4'>
              <span className=' text-5xl bg-gray-800 rounded-lg text-purple-800 hover:text-purple-400'><MdOutlineDateRange /></span>
              <div>
                <h5 className=' text-lg'>Age</h5>
                <p className="text-gray-300 text-sm">22 years</p>
              </div>
            </div>
            <div className=' flex items-center gap-1 mt-4'>
              <span className=' text-5xl bg-gray-800 rounded-lg text-purple-800 hover:text-purple-400'><CiLocationOn /></span>
              <div>
                <h5 className=' text-lg'>Location</h5>
                <p className="text-gray-300 text-sm">Siwan,bihar</p>
              </div>
            </div>
            <div className=' flex items-center gap-1 mt-4'>
              <span className=' text-5xl bg-gray-800 rounded-lg text-purple-800 hover:text-purple-400'><MdCastForEducation /></span>
              <div>
                <h5 className=' text-lg'>Education</h5>
                <p className="text-gray-300 text-sm">BCA</p>
              </div>
            </div>
            <div className=' flex items-center gap-1 mt-4'>
              <span className=' text-5xl bg-gray-800 rounded-lg text-purple-800 hover:text-purple-400'><AiOutlineMail /></span>
              <div>
                <h5 className=' text-lg'>Email</h5>
                <p className="text-gray-300 text-sm">shivamthakur8540@gmail.com</p>
              </div>
            </div>
            <div className=' flex items-center gap-1 mt-4'>
              <span className=' text-5xl bg-gray-800 rounded-lg text-purple-800 hover:text-purple-400'><MdOutlineLanguage /></span>
              <div>
                <h5 className=' text-lg'>Languages</h5>
                <p className="text-gray-300 text-sm">English, Hindi</p>
              </div>
            </div>
          </div>
          </div>

          <div className=" hidden md:flex justify-center">
            <div className=" bg-yellow-300 w-60 h-60 rounded-full flex items-center justify-center">
              <img src={profile} alt="Profile" className="w-56 h-56 rounded-full object-cover" />
            </div>
          </div>
        </div>
        
        <div className=" md:grid md:grid-cols-3 justify-between gap-4 items-center">
          <div className=' sm:h-50 md:h-40 flex flex-col justify-center  md:border rounded-lg bg-gray-900 hover:bg-gray-800 hover: px-4 pt-1 pb-3 mt-4'>
            <div className=' flex items-center gap-2 mt-4'>
              <span className=' text-purple-800'><MdCastForEducation /></span>
              <span className=' text-lg'>Education</span>
            </div>
            <p className="text-gray-300 text-sm">Bachelor of Computer Applications (BCA)</p>
            <p className="text-gray-300 text-sm">Shri Ram Group of College</p>
            <p className="text-gray-300 text-sm">2024-2027</p>
          </div>
          <div className=' sm:h-50 md:h-40 flex flex-col justify-center  md:border rounded-lg bg-gray-900 hover:bg-gray-800 hover: px-4 pt-1 pb-3 mt-4'>
            <div className=' flex items-center gap-2 mt-4'>
              <span className=' text-purple-800'><MdOutlineModeStandby /></span>
              <span className=' text-lg'>Career Objective</span>
            </div>
            {/* <p className="text-gray-300 text-sm">Bachelor of Computer Applications (BCA)</p> */}
            <p className="text-gray-300 text-sm">Passionate Full Stack Developer with a strong interest in building modern, scalable, and user-friendly web applications.</p>
            <p className="text-gray-300 text-sm">2024-2027</p>
          </div>
          <div className=' sm:h-50 md:h-40 flex flex-col justify-center  md:border rounded-lg bg-gray-900 hover:bg-gray-800 hover: px-4 pt-1 pb-3 mt-4'>
            <div className=' flex items-center gap-2 mt-4'>
              <span className=' text-purple-800'><IoBagAddOutline /></span>
              <span className=' text-lg'>Experience</span>
            </div>
            <p className="text-gray-300 text-sm">Fresher</p>
            <p className="text-gray-300 text-sm">I have developed personal projects using modern web technologies to gain hands-on experience in full stack development.</p>
            <p className="text-gray-300 text-sm">2024-2027</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About



