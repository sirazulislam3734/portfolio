import { useEffect, useState } from "react";
import {  Link, useLoaderData, useParams } from "react-router-dom";


const ProjectsDetails = () => {
  const [project, setProject] = useState()
  const {id} = useParams()
  const data = useLoaderData([])
  const paramId = parseInt(id)
  useEffect(() => {
    const newData = [ ...data]?.filter(pro => pro.id === paramId)
  console.log(newData[0]);
  setProject(newData[0]);
}, [data, paramId, setProject])
 
  return (
    
    <div>
       <section className="p-10 bg-gray-900 text-white">
      {/* Back Button */}
      <div className="mb-4">
        <Link to="/" className="text-blue-400 hover:underline">
          ← Back
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Side: Project Details */}
        <div>
          <h1 className="text-4xl font-bold text-purple-300">{project?.name}</h1>
          <p className="mt-4 text-gray-300">{project?.description}</p>

          {/* Technologies Used */}
          <h3 className="mt-6 text-xl font-semibold text-white">
            🚀 Technologies Used:
          </h3>
          <div className="flex flex-wrap mt-2">
            {project?.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm mr-2 mt-2"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Live Demo & GitHub */}
          <div className="mt-6 flex gap-4">
            <a
              href={project?.liveLink}
              className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600"
            >
              Live Demo
            </a>
            <a
              href={project?.githubLink}
              className="bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-600"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right Side: Project Image */}
        <div>
          <img
            src={project?.image}
            alt={project?.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white">⭐ Key Features</h2>
        <ul className="mt-3 list-disc list-inside text-gray-300">
          {project?.features?.map((feature, index) => (
            <li key={index} className="mt-2">{feature}</li>
          ))}
        </ul>
      </div>
    </section>
    </div>
  );
};

export default ProjectsDetails;