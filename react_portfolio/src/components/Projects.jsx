
// import { PROJECTS } from "../constants";
// import { motion } from "framer-motion";

// const Projects = () => {
//   return (
//     <div className="pb-4 border-b border-neutral-900" id="projects">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-5xl lg:text-6xl text-center"
//       >
//         Projects
//       </motion.h2>
//       <div>
//         {PROJECTS.map((project, index) => (
//           <div
//             key={index}
//             className="flex flex-wrap mb-10 cursor-pointer lg:justify-center"
//           >
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               className="w-full lg:w-1/3"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="mb-6 rounded-lg w-full h-auto lg:w-[300px] lg:h-[300px] object-cover"
//               />
//             </motion.div>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 100 }}
//               transition={{ duration: 1 }}
//               className="w-full max-w-2xl lg:w-2/3"
//             >
//               <div className="flex justify-between w-full">
//                 <h6 className="mb-4 text-3xl font-semibold lg:text-4xl">
//                   <a href={project.link}>{project.title}</a>
//                 </h6>
//               </div>
//               <p className="mb-6 text-neutral-400 text-lg lg:text-xl">
//                 {project.description}
//               </p>
//               <div className="flex flex-wrap">
//                 {project.technologies.map((tech, index) => (
//                  <span
//                  key={index}
//                  className="px-4 py-2 mr-2 mb-2 text-sm font-medium text-purple-200 rounded-lg bg-neutral-800 border border-purple-900"
//                >
//                  {tech}
//                </span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;



import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4 border-b border-neutral-900" id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-5xl lg:text-6xl text-center"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap mb-10 cursor-pointer lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded-lg w-full h-auto lg:w-[300px] lg:h-[300px] object-cover"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-2xl lg:w-2/3"
            >
              <div className="flex justify-between w-full">
                <h6 className="mb-4 text-3xl font-semibold lg:text-4xl">
                  <a href={project.link}>{project.title}</a>
                </h6>
              </div>
              <p className="mb-6 text-neutral-400 text-lg lg:text-xl">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                 <span
                   key={index}
                   className="px-4 py-2 mr-2 mb-2 text-sm font-medium text-purple-200 rounded-lg bg-neutral-800 border border-purple-900"
                 >
                   {tech}
                 </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href={project.link}
                  className="text-blue-500 mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
