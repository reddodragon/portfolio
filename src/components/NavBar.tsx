"use client";

import { useState } from "react";
import IconoMenu from "./icons/IconMenu";
import IconClose from "./icons/IconClose";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      </div>
    </>
  );
};

export default NavBar;