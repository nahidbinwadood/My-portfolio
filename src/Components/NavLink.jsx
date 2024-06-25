"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
 const currentPath= usePathname();
 console.log(currentPath);
  return (
    <Link
      href={href}
      className={`${
        currentPath === href ? "block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-[#2EB2D3] transition duration-300" : "active:text-blue-600 block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-[#2EB2D3] transition duration-300"
      } `}
    >
      {title}
    </Link>

   
  );
};

export default NavLink;
