import React from "react";
import ArchiDesignImg from "../assets/archi-design-screen.png";
import PFEImg from "../assets/PFE-screen.png";
import SelfSupervisedLearningImg from "../assets/Self-supervised.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 animated-bg">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-main-light">
            Work
          </p>
          <p className="py-6">// Check out my projects!</p>
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {/* card */}
          <div>
            <div
              style={{ backgroundImage: `url(${SelfSupervisedLearningImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div>
            {/* title / buttons */}
            <div className="flex flex-col bg-[#0a1328] justify-center items-center py-4 mt-[-20px] rounded-b-md">
              <span className="text-l font-bold text-white tracking-wider">
                Self-Supervised Learning for Epileptic Seizure Detection
              </span>
              <div className="pt-2 text-center">
                <a href="https://drive.google.com/file/d/1FUXzTw8ZQSN8HsU2J9S4jjfMtCBnM1b2/view" target="_blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    View Report
                  </button>
                </a>
                <a
                  href="https://catalogue-biblio.univ-setif.dz/opac-science/index.php?lvl=more_results&mode=keyword&user_query=Self-supervised%0D%0Aepilepsy&tags=ok"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    View Publication
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* card */}
          <div>
            <div
              style={{ backgroundImage: `url(${PFEImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div>
            {/* title / buttons */}
            <div className="flex flex-col bg-[#0a1328] justify-center items-center py-4 mt-[-20px] rounded-b-md">
              <span className="text-l font-bold text-white tracking-wider">
              Java CRUD application
              </span>
              <div className="pt-2 text-center">
                <a
                  href="https://github.com/ZakaryaBoudraf/PFE/blob/main/Projet.pdf"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Project report
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* card */}
          <div>
            <div
              style={{ backgroundImage: `url(${ArchiDesignImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div>
            {/* title / buttons */}
            <div className="flex flex-col bg-[#0a1328] justify-center items-center py-4 mt-[-20px] rounded-b-md">
              <span className="text-l font-bold text-white tracking-wider">
                Archi-Design studio site
              </span>
              <div className="pt-2 text-center">
                <a href="https://archi-design.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/ZakaryaBoudraf/archi-design"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
