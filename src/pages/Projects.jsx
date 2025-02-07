import axios from "axios";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";


const Projects = () => {
  const [projects, setProjects] = useState()

 axios.get('project.json')
 .then(res => {
  setProjects(res.data)
 })

  return (
    <section id="projects" className="p-10 bg-gray-100 text-gray-900 text-center">
      <Fade direction="down">
      <h2 className="text-4xl font-bold text-primary mb-6">My Projects</h2>
      </Fade>
      <Fade direction='up'>
      <p className="mb-8">Here are some of my best projects.</p>
      </Fade>
      <Fade direction='up'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <div key={project.id} className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <Fade direction='left'>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            </Fade>
            <Fade direction='right'>
            <p className="mt-4 text-gray-700">{project.description}</p>
            </Fade>
            <Fade direction='down'>
            <NavLink to={`/detailsPage/${project.id}`}>
            <button 
              className="border-blue-700 text-blue-400 hover:border-blue-400 font-semibold bg-slate-200 px-4 py-3 rounded-xl hover:bg-blue-700 w-48 justify-center mx-auto hover:text-white border-b-8 mt-6 flex items-center gap-2"
            >
            View More
            </button>
            </NavLink>
            </Fade>
          </div>

        ))}
      </div>
      </Fade>
    </section>
  );
};

export default Projects;
