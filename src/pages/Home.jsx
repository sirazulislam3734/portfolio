/* eslint-disable react/no-unescaped-entities */
import bannerImg from '../assets/miraz.jpg'
import { FaDownload } from "react-icons/fa";
import SocialLinks from '../components/SocialLinks';
import { Fade, Slide } from 'react-awesome-reveal';

const Home = () => {
  return (
    <section className="home lg:px-20 space-y-3 md:px-10 px-3 lg:py-10 md:py-5 py-3 md:flex items-center justify-center bg-base-200 md:gap-3">
      <div className="md:text-left bg-base-300 rounded-xl text-center px-6 py-6 flex-1">
        <Fade direction='up'>
        <h1 className="text-4xl font-bold md:border-l-6 md:pl-2 md:border-blue-700">Hi, I'm <br />
          Sirazul Islam</h1>
          </Fade>
          <Fade direction='up'>
        <h2 className="text-2xl text-primary mt-2">MERN Stack Developer</h2>
        </Fade>
        <Fade direction='up'>
        <p className="text-lg mt-2">Building modern and responsive web applications.</p>
        </Fade>
        <Fade direction='left'>
        <p className='md:border-l-4 md:pl-2 md:border-blue-700 mt-3 font-medium'>Social Links</p>
        <div className='md:flex md:flex-star md:border-l-4 md:pl-2 md:border-blue-700'><SocialLinks></SocialLinks></div>
        </Fade>
        <a 
          href="/resume.pdf" 
          download 
          className="border-blue-700 text-blue-400 hover:border-blue-400 font-semibold bg-slate-200 px-4 py-3 rounded-xl hover:bg-blue-700 md:mx-0 mx-auto hover:text-white w-52 border-b-8 mt-6 flex items-center gap-2"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
      <div className="flex-1">
        <Slide direction='down'>
      <img className="mx-auto rounded-xl md:w-96 w-full h-96" src={bannerImg} alt="" />
      </Slide>
      </div>
    </section>
  );
};

export default Home;

// const skillsData = [
//   { name: "HTML5", icon: <FaHtml5 className="text-5xl text-orange-500" />, description: "Markup language for structuring web content." },
//   { name: "CSS3", icon: <FaCss3Alt className="text-5xl text-blue-500" />, description: "Style sheet language for designing web pages." },
//   { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-500" />, description: "Programming language for web development." },
//   { name: "React", icon: <FaReact className="text-5xl text-blue-400" />, description: "JavaScript library for building user interfaces." },
//   { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-500" />, description: "Runtime environment for executing JavaScript code server-side." },
//   { name: "Database", icon: <FaDatabase className="text-5xl text-gray-600" />, description: "Storage systems for managing structured data." },
// ];
