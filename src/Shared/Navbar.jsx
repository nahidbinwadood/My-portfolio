"use client";
import NavLink from "@/Components/NavLink";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import MenuOverlay from "@/Components/MenuOverlay";
import { usePathname, useRouter } from "next/navigation";
const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const path = router.pathname;

  return (
    <nav className="fixed top-0 left-0 right-0 z-10  bg-[#000319] px-8 md:px-0 ">
      <div className="flex flex-wrap items-center justify-between py-8 container mx-auto">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          Nahid
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <CgMenu className="size-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <AiOutlineClose className="size-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1xff-w6lkeZwSFN005npR9ZXiuzQRIkvn/view?usp=sharing"
            className="bg-[#2EB2D3] hidden md:block font-semibold px-6 py-2 md:px-12 md:py-4 text-white rounded-full"
          >
            My Resume
          </Link>
        </div>
      </div>
      <div>{navbarOpen ? <MenuOverlay links={navLinks} /> : null}</div>
    </nav>
  );
};

export default Navbar;
