"use client";
import { useState } from "react";
import MenuItem from "./MenuItem";
import AboutIcon from "./icons/AboutIcon";
import CodeIcon from "./icons/CodeIcon";
import ContactIcon from "./icons/Contact";
import HomeIcon from "./icons/HomeIcon";
import { usePathname } from "next/navigation";
import IconClose from "./icons/IconClose";
import IconMenu from "./icons/IconMenu";

const Menu: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const handleHover = (itemName: string) => {
    setHoveredItem(itemName);
  };

  const handleLeave = () => {
    setHoveredItem(null);
  };

  const isItemHovered = (itemName: string) => {
    return (
      (hoveredItem === itemName) ||
      (pathname === '/' && itemName === 'Home') ||
      (pathname === '/work' && itemName === 'Work') ||
      (pathname === '/about' && itemName === 'About') ||
      (pathname === '/contact' && itemName === 'Contact')
    );
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        className="fixed z-20 top-4 left-4 text-white"
        onClick={toggleMenu}
      >
        {menuOpen ? <IconClose /> : <IconMenu />}
      </button>

      {menuOpen && (
        <div className="fixed z-10 bg-black bg-opacity-90 sm:bg-opacity-0 w-4/5 sm:w-auto sm:left-10 flex flex-col justify-center h-full text-white pl-10 sm:pl-4 p-4">
          <div className=" flex flex-col text-3xl sm:text-xl gap-6 sm:gap-4">
            <MenuItem
              itemName="Home"
              href="/"
              isItemHovered={isItemHovered}
              handleHover={handleHover}
              handleLeave={handleLeave}
              closeMenu={toggleMenu}
            >
              Home
              <HomeIcon />
            </MenuItem>
            <MenuItem
              itemName="Work"
              href="/work"
              isItemHovered={isItemHovered}
              handleHover={handleHover}
              handleLeave={handleLeave}
              closeMenu={toggleMenu}
            >
              Projects
              <CodeIcon />
            </MenuItem>
            <MenuItem
              itemName="About"
              href="/about"
              isItemHovered={isItemHovered}
              handleHover={handleHover}
              handleLeave={handleLeave}
              closeMenu={toggleMenu}
            >
              About
              <AboutIcon />
            </MenuItem>
            <MenuItem
              itemName="Contact"
              href="/contact"
              isItemHovered={isItemHovered}
              handleHover={handleHover}
              handleLeave={handleLeave}
              closeMenu={toggleMenu}
            >
              Contact
              <ContactIcon />
            </MenuItem>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;