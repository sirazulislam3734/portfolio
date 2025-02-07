/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import profilePic from "../assets/miraz.jpg"; // Ensure you have an image in the assets folder

const AboutMe = () => {
  return (
    <Link to="/about">
    <section className="flex flex-col md:flex-row items-center justify-center p-8 bg-base-200">
      <div className="md:w-1/3 flex justify-center">
        <img src={profilePic} alt="Profile" className="w-52 h-52 rounded-full shadow-lg" />
      </div>
      <div className="md:w-2/3 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-3xl font-bold text-primary">About Me</h2>
        <p className="mt-4 text-lg text-gray-700 font-medium">
        Hi, I'm Sirazul Islam, an enthusiastic full stack developer with experience in building modern and responsive web applications. I enjoy solving problems, creating beautiful user experiences, and constantly learning new technologies.
        </p>
        <p className="mt-4 text-lg text-gray-700 font-medium">
        Apart from coding, I love playing video games, cricket, and exploring new places.
        </p>
      </div>
    </section>
    </Link>
  );
};

export default AboutMe;
