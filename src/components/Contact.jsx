import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link as LinkRouter } from "react-router-dom";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen animated-bg flex flex-col justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/f660f5c7-3619-4e85-8454-6db77e24ff7e"
        method="POST"
        className="flex flex-col max-w-[800px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-main-light text-gray-300">
            Contact
          </p>
          <p className="py-4 text-gray-300">// Send me an email</p>
        </div>
        <input
          className="bg-gray-200 p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-gray-200"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-gray-200 p-2"
          placeholder="Message"
          name="message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-main-light hover:border-main-light duration-100 px-2 py-3 mx-auto my-8 flex items-center">
          Let's Collaborate
        </button>
      </form>
      {/* Social icons on small screens */}
      <div className="flex lg:hidden">
        <ul className="flex pt-4">
          <li className="flex justify-between items-center duration-150 hover:scale-110">
            <a
              className="flex flex-col first-letter:justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/zakarya-boudraf-55006b240/"
              target="_blank"
            >
              <FaLinkedin size={50} className="mb-2" /> Linkedin
            </a>
          </li>
          <li className="flex justify-between items-center duration-150 hover:scale-110">
            <a
              className="flex flex-col justify-between items-center w-full text-white"
              href="https://github.com/ZakaryaBoudraf"
              target="_blank"
            >
              <FaGithub size={50} className="mb-2" /> GitHub
            </a>
          </li>
          <li className="flex justify-between items-center duration-150 hover:scale-110">
            <a
              className="flex flex-col justify-between items-center w-full text-white"
              href="mailto: zakaryaboudraf@gmail.com"
            >
              <HiOutlineMail size={50} className="mb-2" /> Email
            </a>
          </li>
          <li className="flex justify-between items-center duration-150 hover:scale-110">
            <LinkRouter
              className="flex flex-col justify-between items-center w-full text-white"
              to="/resume"
            >
              <BsFillPersonLinesFill size={50} className="mb-2" /> Resume
            </LinkRouter>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
