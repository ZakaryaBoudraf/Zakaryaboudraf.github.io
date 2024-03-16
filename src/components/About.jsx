import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen animated-bg text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-main-light">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold">
            <p>Hi, I'm Zakarya, nice to meet you. Feel free to look around.</p>
          </div>
          <div>
            <p>
            I'm a full-stack developer, with a focus on front-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
