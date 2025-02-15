import axios from "axios";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState();

  axios.get("project.json").then((res) => {
    setProjects(res.data);
  });

  return (
    <section
      id="projects"
      className="p-10 bg-gray-100 text-gray-900 text-center"
    >
      <Fade direction="down">
        <h2 className="text-4xl font-bold text-primary mb-6">My Projects</h2>
      </Fade>
      <Fade direction="down">
        <p className="mb-8">Here are some of my best projects.</p>
      </Fade>
      <Fade direction="down">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <div key={project.id} className="w-full">
              <img
                src={project.image}
                alt="Card img"
                className="object-cover object-center w-full h-48"
              />
              <div className="text-left">
                <div className="px-4 py-6 bg-white border border-gray-400 text">
                  <div>
                    <a className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"> 
                      <div className="mb-3 flex">
                      <span className="text-sm mr-1">Technologies: </span>
                        {project?.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-300 px-1 py-1 rounded-lg mr-1"
                          > {tech}
                          </span>
                        ))}
                      </div>
                    </a>
                    <a className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                      {project?.name}
                    </a>
                    <p className="mb-4">{project?.description}</p>
                  </div>
                  <div>
                    <NavLink to={`/detailsPage/${project.id}`}>
                      <a
                        href="#"
                        className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                      >
                        Read More {"->"}
                      </a>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Projects;
