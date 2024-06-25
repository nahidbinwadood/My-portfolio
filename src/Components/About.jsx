/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { FaUserGraduate } from "react-icons/fa";
const About = () => {
  return (
    <section id="about" className="text-white mt-16">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-center ">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12  mt-16 ">
          <div className="md:w-1/3">
            <Image
              className="rounded-3xl"
              height="440"
              width="440"
              alt="myProfile"
              src="/assets/panjabi.jpg"
            />
          </div>
          <div className="md:w-2/3 space-y-4">
            <p className="md:text-lg">
              I'm Akm Nahid Bin Wadood, a web developer specializing in the MERN
              stack. I hold a BSc in Electronics and Electrical Engineering from
              BRAC University. Proficient in HTML5, CSS3, and JavaScript, I
              leverage React, Node.js, Express, and MongoDB to create robust web
              applications. Passionate about continuous learning, I aim to
              become a software engineer with comprehensive expertise in
              software development. I believe in technology's transformative
              power and am eager to contribute to innovative projects, confident
              in my ability to tackle new challenges and excel within any
              development team.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 md:h-[50vh]">
        <h2 className="text-2xl md:text-4xl font-bold text-center  ">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 ">
          <div className="border-2 border-gray-500 p-5 flex items-center justify-center gap-12 rounded-lg">
            <div className="text-white ">
              <FaUserGraduate className="text-white size-16" />
            </div>
            <div className="space-y-3 text-lg ">
              <h2>Bachelor of Science in Electrical and Electronics Engineering(EEE)</h2>
              <h2>BRAC University</h2>
              <h2>January,2019- May,2023</h2>
            </div>
          </div>
          <div className="border-2 border-gray-500 p-5 flex items-center justify-center gap-12 rounded-lg">
            <div className="text-white ">
              <FaUserGraduate className="text-white size-16" />
            </div>
            <div className="space-y-3 text-lg ">
              <h2>Higher Secondary Certificate</h2>
              <h2>BCIC College</h2>
              <h2>2016-2018</h2>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
