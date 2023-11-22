"use client";

import { useState } from "react";
import IconoMenu from "./icons/IconMenu";
import IconClose from "./icons/IconClose";
import Link from "next/link";
import HomeIcon from "./icons/HomeIcon";
import CodeIcon from "./icons/CodeIcon";
import AboutIcon from "./icons/AboutIcon";
import ContactIcon from "./icons/Contact";
import { usePathname } from "next/navigation";


const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed bg-black opacity-50"
          onClick={closeNav}
        ></div>
      )}

      <div
        id="navbar"
        className={`fixed h-full font-semibold text-xl text-[#1d1d1d] w-0 z-10 overflow-x-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "w-48" : ""
        }`}
      >
        <div className="fixed transition-all duration-500 ease-in-out">
          <button
            className="open-btn intense-shadow rounded-full bg-gray-800 text-white p-3 mt-4 ml-2 sm:ml-4"
            onClick={toggleNav}
          >
            {isOpen ? <IconClose /> : <IconoMenu />}
          </button>
        </div>
        <div className="flex flex-col justify-center w-full h-full gap-5">
          <Link
            onClick={() => closeNav()}
            href="/"
            className={`intense-shadow shadow-f flex justify-center bg-gradient-to-r z-50 from-blue-500 to-indigo-900 rounded-2xl p-4 text-center ${
              pathname === "/" ? "active" : ""
            }`}
          >
            <HomeIcon />
          </Link>
          <Link
            onClick={() => closeNav()}
            href="/work"
            className={`intense-shadow shadow-f flex justify-center bg-gradient-to-r from-teal-400 to-indigo-900 rounded-2xl p-4 text-center ${
              pathname === "/work" ? "active" : ""
            }`}
          >
            <CodeIcon />
          </Link>
          <Link
            onClick={() => closeNav()}
            href="/about"
            className={`intense-shadow shadow-f flex justify-center bg-gradient-to-r from-yellow-200 to-yellow-600 rounded-2xl p-4 text-center ${
              pathname === "/about" ? "active" : ""
            }`}
          >
            <AboutIcon />
          </Link>
          <Link
            onClick={() => closeNav()}
            href="/contact"
            className={`intense-shadow shadow-f flex justify-center bg-gradient-to-r from-indigo-300 to-indigo-100 rounded-2xl p-4 text-center ${
              pathname === "/contact" ? "active" : ""
            }`}
          >
            <ContactIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;