import { ReactNode } from "react";
import Diamond from "./Diamond";
import Link from "next/link";

interface MenuItemProps {
  itemName: string;
  href: string;
  isItemHovered: (itemName: string) => boolean;
  handleHover: (itemName: string) => void;
  handleLeave: () => void;
  closeMenu: () => void;
  children: ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
  itemName,
  href,
  isItemHovered,
  handleHover,
  handleLeave,
  closeMenu,
  children,
}) => {
  const handleClick = () => {
    closeMenu();
  };

  return (
    <Link
      href={href}
      onMouseEnter={() => handleHover(itemName)}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className={`animate-element flex items-center gap-3 ${
        isItemHovered(itemName) ? "hovered" : ""
      }`}
    >
      <Diamond isHovered={isItemHovered(itemName)} />
      <div className="flex w-full sm:justify-between items-center gap-1">{children}</div>
    </Link>
  );
};

export default MenuItem;