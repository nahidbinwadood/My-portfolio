"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div id="projects" className="text-white mt-24">
      <h2 className="text-2xl md:text-4xl font-bold text-center ">
        Project Showcase
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 ">
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className=" flex flex-col justify-center bg-[#2EB2D300] border-2 border-gray-500 p-4 lg:p-12 rounded-xl">
          <div className=" ">
            <Image
              className=" "
              height={240}
              width={540}
              alt="eliteEstate"
              src="/assets/eliteEstate.png"
            />
          </div>
          <div>
            <h2 className="font-medium text-center text-lg md:text-2xl mt-6">  EliteEstate Solutions</h2>
            <h2 className="text-center  md:text-lg mt-6">  Real Estate Business</h2>
          </div>
          <div className="flex items-center justify-between py-6">
              <Link target="_blank" href={"https://eliteestate-solutions.web.app"} className="bg-[#2EB2D3] font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full">Live </Link>
              <Link target="_blank" href={"https://github.com/nahidbinwadood/EliteEstate-Solutions"} className="flex items-center gap-3 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-8 md:py-2  rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500">
              <FaGithub  className="size-5 lg:size-8 text-[#fff]" />
                </Link>
            </div> 
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
         className=" flex flex-col justify-center bg-[#2EB2D300] border-2 border-gray-500 p-4 lg:p-12 rounded-xl">
          <div className=" ">
            <Image
              className=" "
              height={240}
              width={540}
              alt="eliteEstate"
              src="/assets/VolunteerHub.png"
            />
          </div>
          <div>
            <h2 className="font-medium text-center text-lg md:text-2xl mt-6">  VolunteerHub </h2>
            <h2 className="text-center  md:text-lg mt-6">Volunteer Management System</h2>
          </div>
          <div className="flex items-center justify-between py-6">
              <Link target="_blank" href={"https://volunteer-management-sys-66dad.web.app/"} className="bg-[#2EB2D3] font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full">Live </Link>
              <Link target="_blank" href={"https://github.com/nahidbinwadood/Volunteer-Management-System"} className="flex items-center gap-3 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-8 md:py-2  rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500">
              <FaGithub  className="size-5 lg:size-8 text-[#fff]" />
                </Link>
            </div> 
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className=" flex flex-col justify-center bg-[#2EB2D300] border-2 border-gray-500 p-4 lg:p-12 rounded-xl">
          <div className=" ">
            <Image
              className=" "
              height={240}
              width={540}
              alt="eliteEstate"
              src="/assets/paintHomee.png"
            />
          </div>
          <div>
            <h2 className="font-medium text-center text-lg md:text-2xl mt-6">PaintHome </h2>
            <h2 className="text-center  md:text-lg mt-6">Painting and Drawing Website</h2>
          </div>
          <div className="flex items-center justify-between py-6">
              <Link target="_blank" href={"https://painting-drawing-auth.web.app/"} className="bg-[#2EB2D3] font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full">Live </Link>
              <Link target="_blank" href={"https://github.com/nahidbinwadood/Paint-Home"} className="flex items-center gap-3 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-8 md:py-2  rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500">
              <FaGithub  className="size-5 lg:size-8 text-[#fff]" />
                </Link>
            </div> 
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className=" flex flex-col justify-center bg-[#2EB2D300] border-2 border-gray-500 p-4 lg:p-12 rounded-xl">
          <div className=" ">
            <Image
              className=" "
              height={240}
              width={540}
              alt="eliteEstate"
              src="/assets/bistroBoss.png"
            />
          </div>
          <div>
            <h2 className="font-medium text-center text-lg md:text-2xl mt-6">BistroBoss </h2>
            <h2 className="text-center  md:text-lg mt-6">Restaurant Website</h2>
          </div>
          <div className="flex items-center justify-between py-6">
              <Link target="_blank" href={"https://bistro-boss-5eb34.web.app/"} className="bg-[#2EB2D3] font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full">Live </Link>
              <Link target="_blank" href={"https://github.com/nahidbinwadood/Bistro-Boss-Restaurant"} className="flex items-center gap-3 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-8 md:py-2  rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500">
              <FaGithub  className="size-5 lg:size-8 text-[#fff]" />
                </Link>
            </div> 
        </motion.div>   
        <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
         className=" flex flex-col justify-center bg-[#2EB2D300] border-2 border-gray-500 p-4 lg:p-12 rounded-xl">
          <div className=" ">
            <Image
              className=" "
              height={240}
              width={540}
              alt="eliteEstate"
              src="/assets/bookVibe.png"
            />
          </div>
          <div>
            <h2 className="font-medium text-center text-lg md:text-2xl mt-6">BooKVibe </h2>
            <h2 className="text-center  md:text-lg mt-6">Book Store Website</h2>
          </div>
          <div className="flex items-center justify-between py-6">
              <Link target="_blank" href={"https://guileless-lolly-a03759.netlify.app/"} className="bg-[#2EB2D3] font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full">Live </Link>
              <Link target="_blank" href={"https://github.com/nahidbinwadood/Book-Vibe"} className="flex items-center gap-3 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-8 md:py-2  rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500">
              <FaGithub  className="size-5 lg:size-8 text-[#fff]" />
                </Link>
            </div> 
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className=" flex flex-col justify-center bg-[#2EB2D300] border-2 border-gray-500 p-4 lg:p-12 rounded-xl">
          <div className=" ">
            <Image
              className=" "
              height={240}
              width={540}
              alt="eliteEstate"
              src="/assets/empireProperties.png"
            />
          </div>
          <div>
            <h2 className="font-medium text-center text-lg md:text-2xl mt-6">Empire Properties </h2>
            <h2 className="text-center  md:text-lg mt-6">Luxurious Estate Website</h2>
          </div>
          <div className="flex items-center justify-between py-6">
              <Link target="_blank" href={"https://real-esate-business.web.app/"} className="bg-[#2EB2D3] font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full">Live </Link>
              <Link target="_blank" href={"https://github.com/nahidbinwadood/Empire-Properties"} className="flex items-center gap-3 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-8 md:py-2  rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500">
              <FaGithub  className="size-5 lg:size-8 text-[#fff]" />
                </Link>
            </div> 
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
