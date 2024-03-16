import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "react-scroll/modules/components/Link";

const Hero = () => {
  return (
    <div name="hero" className="animated-bg w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-main-light">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Zakarya Boudraf
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#9d9ab0] mt-3">
          I'm an IoT,Machine Learning and Front-End Developer
        </h2>
        <p className="text-gray-300 py-4 max-w-[700px]">
        Hi there ~ 👋
        A jack of all trades is a master of none, but oftentimes better than a master of one.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="group text-gray-300 border-2 px-4 py-3 my-2 flex items-center hover:bg-main-light hover:border-main-light duration-75">
              View work
              <span className="group-hover:ml-2 duration-100">
                <HiArrowNarrowRight size={20} className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
