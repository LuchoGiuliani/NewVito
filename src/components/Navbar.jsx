import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleLinkClick = (linkTitle) => {
    setActive(linkTitle);
    window.scrollTo(0, 0);
  };

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={`${styles.paddingX} items-center py-5 fixed top-0 z-20 w-full flex bg-primary rounded-b-xl opacity-70 px-6`}>
      <div className="items-center w-full flex justify-between mx-auto max-w-7x1">
        <Link to="/" className="flex items-center gap-2" onClick={() => handleLinkClick("")}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`text-${active === link.title ? "white" : "secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
              <a target={link.title === "Instagram" ? "_blank" : undefined} href={`${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={handleToggleClick} />
          <div className={`${toggle ? 'flex' : 'hidden'} p-2 absolute top-10 right-[-2em] mt-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li onClick={() => { handleToggleClick(); handleLinkClick(link.title); }} key={link.id} className={`text-${active === link.title ? "white" : "secondary"} font-poppins font-medium cursor-pointer text-[16px]`}>
                  <a href={`${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

