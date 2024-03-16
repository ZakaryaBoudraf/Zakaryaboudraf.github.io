import React from "react";
import CSS from "../assets/css.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen animated-bg text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-main-light">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#05102a] hover:scale-110 duration-200 bg-main-dark pt-4 rounded-lg">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#05102a] hover:scale-110 duration-200 bg-main-dark pt-4 rounded-lg">
            <img src={CSS} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#05102a] hover:scale-110 duration-200 bg-main-dark pt-4 rounded-lg">
            <img src={JavaScript} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#05102a] hover:scale-110 duration-200 bg-main-dark pt-4 rounded-lg">
            <img src={ReactImg} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#05102a] hover:scale-110 duration-200 bg-main-dark pt-4 rounded-lg">
            <img src={GitHub} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#05102a] hover:scale-110 duration-200 bg-main-dark pt-4 rounded-lg">
            <img src={Tailwind} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">Tailwind</p>
          </div>
          {/*todo: ADD JAVA PYTHON AND MORE */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
