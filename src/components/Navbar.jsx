import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    
    <div>
      {/* Navbar */}
      <div className="z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-main-dark text-main-light shadow-lg">
        <div>
          <img src={Logo} alt="Logo Image" style={{ width: "60px" }} />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-2 text-lg font-bold">
          <li className="rounded-lg hover:bg-main-light hover:text-main-dark duration-200">
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="rounded-lg hover:bg-main-light hover:text-main-dark duration-200">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="rounded-lg hover:bg-main-light hover:text-main-dark duration-200">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="rounded-lg hover:bg-main-light hover:text-main-dark duration-200">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="rounded-lg hover:bg-main-light hover:text-main-dark duration-200">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-main-dark flex flex-col justify-center items-center z-10"
          }
        >
          <li className="py-6 text-3xl">
            <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-3xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-3xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-3xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-3xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* social */}
        <div className="hidden lg:flex fixed flex-col top-1/3 left-0 scale-100 ">
          <ul>
            <li className="bg-black bg-opacity-30 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-main-light">
              <a
                className="flex justify-between items-center w-full text-white "
                href="https://www.linkedin.com/in/zakarya-boudraf-55006b240/"
                target="_blank"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="bg-black bg-opacity-30 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-main-light">
              <a
                className="flex justify-between items-center w-full text-white "
                href="https://github.com/ZakaryaBoudraf"
                target="_blank"
              >
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className="bg-black bg-opacity-30 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-main-light">
              <a
                className="flex justify-between items-center w-full text-white "
                href="mailto: zakaryaboudraf@gmail.com"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="bg-black bg-opacity-30 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-main-light">
              <LinkRouter
                className="flex justify-between items-center w-full text-white "
                to="/resume"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </LinkRouter>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
