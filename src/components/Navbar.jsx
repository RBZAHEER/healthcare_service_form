import { React, useState } from "react";
import logo from "/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <div className=" flex justify-between p-5 w-full mt-5 items-center text-2xl ">
        <img src={logo} className="text-blue-500 font-bold " />
        {/* Desktop */}
        <div className="hidden md:flex space-x-8 ">
          <a to={"/"} className="hover:text-blue-500 cursor-pointer">
            Home
          </a>
          <a to={"/about"} className="hover:text-blue-500 cursor-pointer">
            About
          </a>
          <a to={"/contact"} className="hover:text-blue-500 cursor-pointer">
            Contact
          </a>
        </div>
        <div className="md:hidden flex justify-between">
          {/* this is for close and hamburger button */}

          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdClose /> : <GiHamburgerMenu />}
          </div>
        </div>
        {isOpen && (
          <div>
            <ul className="flex flex-col space-y-5">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
