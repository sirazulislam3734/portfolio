/* eslint-disable react/no-unescaped-entities */

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skillsData = [
  {
    name: "React Js",
    icon: <FaReact className="text-5xl text-blue-400" />,
    percentage: "90%",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-5xl text-yellow-500" />,
    percentage: "50%",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-5xl text-orange-500" />,
    percentage: "70%",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-5xl text-blue-500" />,
    percentage: "80%",
  },
  {
    name: "Express Js",
    icon: <SiExpress className="text-5xl text-gray-300" />,
    percentage: "70%",
  },
  {
    name: "Database",
    icon: <FaDatabase className="text-5xl text-gray-600" />,
    percentage: "40%",
  },
  {
    name: "Node Js",
    icon: <FaNodeJs className="text-5xl text-green-500" />,
    percentage: "70%",
  },
  {
    name: "Mongo DB",
    icon: <SiMongodb className="text-5xl text-green-400" />,
    percentage: "90%",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="bg-base-200">
      <p className="text-4xl text-center font-bold lg:py-10 md:py-5 text-primary py-3">My Skills</p>
      <section className="p-10 text-left flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold leading-tight">
            Let's Explore Popular{" "}
            <span className="text-primary">Skills & Experience</span>
          </h2>
          <p className="text-gray-400 mt-4">
            These are my skills that I've learned over 1 years
          </p>
          <button className="border-blue-700 text-blue-400 hover:border-blue-400 font-semibold bg-slate-200 px-4 py-3 rounded-xl hover:bg-blue-700 w-48 justify-center mx-0 hover:text-white border-b-8 mt-6 flex items-center gap-2">
            Learn More →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full md:w-2/3">
          {skillsData.map((skill, index) => (
            <div key={index} className=" p-6 rounded-xl text-center shadow-md">
              <div className="flex justify-center mb-3">{skill.icon}</div>
              <h3 className="text-lg text-gray-600 font-semibold">{skill.name}</h3>
              <p className="mt-2 inline-block px-4 py-1 rounded-full">
                {skill.percentage}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
