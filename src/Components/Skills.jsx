"use client"
import React from "react";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoFirebase, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import {motion} from "framer-motion"
const iconVariants=(duration)=>({
    initial:{y: -10},
    animate:{
        y: [15,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})
const Skills = () => {
  return (
    <section id="skills" className="text-white mt-16  ">
      <h2 className="text-2xl md:text-4xl font-bold text-center ">My Skills</h2>
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-12 mt-16 justify-evenly">
          <motion.div variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="px-6 py-4 bg-gradient-to-r from-[#220926] to-[#942733]  rounded-md cursor-pointer flex flex-col items-center justify-center">
            <IoLogoHtml5 className="size-20 text-[#E96229]" />
            <h2 className="text-lg font-semibold">HTML</h2>
          </motion.div>
          <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="px-6 py-4 bg-gradient-to-t from-[#162164] to-[#253597]  rounded-md cursor-pointer flex flex-col items-center justify-center">
            <FaCss3Alt className="size-20 text-[#2862E9]" />
            <h2 className="text-lg font-semibold">CSS</h2>
          </motion.div>
          <motion.div 
           variants={iconVariants(5)}
           initial="initial"
           animate="animate"
          className="px-6 py-4  bg-gradient-to-r from-[#040D2C] to-[#2A82A6]  rounded-md cursor-pointer flex flex-col items-center justify-center">
            <RiTailwindCssFill className="size-20 text-[#36B7F0]" />
            <h2 className="text-lg font-semibold">Tailwind</h2>
          </motion.div>
          <motion.div
           variants={iconVariants(2)}
           initial="initial"
           animate="animate"
           className="px-6 py-4 bg-gradient-to-l from-[#8C68CD] to-[#040D2C] rounded-md cursor-pointer flex flex-col items-center justify-center">
            <FaBootstrap className="size-20 text-[#7711F4]" />
            <h2 className="text-lg font-semibold">Bootstrap</h2>
          </motion.div>
          <motion.div 
           variants={iconVariants(6)}
           initial="initial"
           animate="animate"
          className="px-6 py-4 bg-gradient-to-r from-[#7E6238] to-[#B08822] rounded-md cursor-pointer flex flex-col items-center justify-center">
            <IoLogoJavascript  className="size-20 text-[#F7DF1E]" />
            <h2 className="text-lg font-semibold">JavaScript</h2>
          </motion.div>
          <motion.div 
           variants={iconVariants(3.5)}
           initial="initial"
           animate="animate"
          className="px-6 py-4 bg-gradient-to-r from-[#194330] to-[#27974E] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center">
            <FaNodeJs className="size-20 text-[#8BBF3D]" />
            <h2 className="text-lg font-semibold">NodeJs</h2>
          </motion.div>
        </div>
        <div className="flex items-center gap-12 mt-16 justify-evenly">  
        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className="px-6 py-4 bg-gradient-to-r from-[#00001F] to-[#27609E]   rounded-md cursor-pointer flex flex-col items-center justify-center">
            <FaReact className="size-20 text-[#5ED3F3]" />
            <h2 className="text-lg font-semibold">React</h2>
          </motion.div>
          <motion.div 
           variants={iconVariants(7)}
           initial="initial"
           animate="animate"
          className="px-6 py-4 bg-gradient-to-r from-amber-600 to-[#72482A] rounded-md cursor-pointer flex flex-col items-center justify-center">
            <IoLogoFirebase className="size-20 text-[#F7C326]" />
            <h2 className="text-lg font-semibold">Firebase</h2>
          </motion.div>        
          <motion.div 
           variants={iconVariants(6)}
           initial="initial"
           animate="animate"
          className="px-6 py-4 bg-gradient-to-r from-[#0F2C2F] to-[#27954D] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center">
            <DiMongodb className="size-20 text-[#429833]" />
            <h2 className="text-lg font-semibold">Mongodb</h2>
          </motion.div>
       
          <motion.div  
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"className="px-6 py-4 bg-gradient-to-r from-[#fff] to-[#373837] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center">
            <FaGithub  className="size-20 text-[#151513]" />
            <h2 className="text-lg font-semibold">GitHub</h2>
          </motion.div>                   
        </div>
        <div className="flex items-center gap-12 mt-16 justify-evenly">          
          <motion.div 
           variants={iconVariants(3.5)}
           initial="initial"
           animate="animate"
          className="px-6 py-4 bg-gradient-to-t from-[#133124] to-[#2c814a] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center">
            <SiExpress  className="size-20 text-[#000]" />
            <h2 className="text-lg font-semibold">ExpressJs</h2>
          </motion.div>
          <motion.div
           variants={iconVariants(2)}
           initial="initial"
           animate="animate" className="px-6 py-4 bg-gradient-to-r from-[#694943] to-[#993224] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center">
            <FaGitAlt  className="size-20 text-[#E85236]" />
            <h2 className="text-lg font-semibold">Git</h2>
          </motion.div>
          <motion.div  variants={iconVariants(3)}
           initial="initial"
           animate="animate"
          className="px-6 py-4 bg-gradient-to-b from-[#fff] to-[#373837] #7151FC rounded-md cursor-pointer flex flex-col items-center justify-center">
            <RiNextjsFill   className="size-20 text-[#151513]" />
            <h2 className="text-lg font-semibold">NextJs</h2>
          </motion.div>
        
           
        </div>
      </div>
    </section>
  );
};

export default Skills;