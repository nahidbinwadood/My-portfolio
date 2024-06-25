import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-between py-8 ">
      <div>
        <Link href="/" className="font-bold cursor-pointer text-4xl">
          Nahid
        </Link>
      </div>
      <div className="hidden items-center gap-12 lg:flex text-lg">
        <Link href="/" className="font-semibold hover:text-[#2EB2D3] transition duration-300">
          Home
        </Link>
        <Link  href="#about" className="font-semibold hover:text-[#2EB2D3] transition duration-300">
          About
        </Link>
        <Link href="#skills" className="font-semibold hover:text-[#2EB2D3] transition duration-300">
          Skills
        </Link>
        <Link href="#projects" className="font-semibold hover:text-[#2EB2D3] transition duration-300">
          Projects
        </Link>
        <Link href="#contact" className="font-semibold hover:text-[#2EB2D3] transition duration-300">
          Contact
        </Link>
      </div>
      <div>
        <Link target="_blank" href="https://drive.google.com/file/d/1xff-w6lkeZwSFN005npR9ZXiuzQRIkvn/view?usp=sharing" className="bg-[#2EB2D3] font-semibold px-6 py-2 md:px-12 md:py-4 text-white rounded-full">
          My Resume
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
