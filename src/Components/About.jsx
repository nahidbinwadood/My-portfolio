/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="text-white mt-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center ">About Me</h2>
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
          I'm Akm Nahid Bin Wadood, a passionate web developer specializing in the MERN stack. I recently earned my BSc in Electronics and Electrical Engineering(EEE) from BRAC University, where I built a foundation in programming and computer science principles. Post-graduation, I've focused on mastering web development, particularly the MERN stack.
          </p>
          <p className="md:text-lg">
          I am proficient in HTML5, CSS3, and JavaScript, skills I have utilized to create several frontend and full-stack projects. My expertise includes tools and frameworks like React, Node.js, Express, and MongoDB, which enable me to build robust and scalable web applications.
          </p>
          <p className="md:text-lg">
          I am deeply committed to continuous learning and thrive on the excitement of acquiring new knowledge and skills. My goal is to become a software engineer with extensive expertise in all aspects of software development. I believe in the transformable power of technology and am eager to contribute to innovative projects. With my strong foundation, passion for learning, and drive for excellence, I am confident in my ability to tackle new challenges and contribute meaningfully to any development team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
