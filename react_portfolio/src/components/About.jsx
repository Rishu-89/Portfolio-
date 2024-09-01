// import aboutImg from "../assets/about.jpg";
// import { ABOUT_TEXT } from "../constants";
// import pdf from "../pdf/resume.pdf";
// import { delay, motion } from "framer-motion";

// const About = () => {
//   return (
//     <div className="pb-4 border-b border-neutral-900" id="about">
//         <h1 className="my-20 text-4xl text-center">
//             About
//             <span className="text-neutral-500"> Me</span>
//         </h1>
//         <div className="flex flex-wrap">
//             <motion.div
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full lg:w-1/2 lg:p-8">
//                 <div className="flex items-center justify-center">
//                     <img className="rounded-2xl" src={aboutImg} alt="about"></img>
//                 </div>
//             </motion.div>
//             <motion.div
//                  whileInView={{ opacity: 1, x: 0 }}
//                  initial={{ opacity: 0, x: 100 }}
//                  transition={{ duration: 0.5 }}
//                 className="w-full lg:w-1/2">
//                 <div className="flex justify-center items-center lg:justify-start">
//                     <p className="my-2 flex items-center justify-center max-w-xl p-6">{ABOUT_TEXT}</p>
//                 </div>

//                 resume dounload link

//                  <div  className="flex justify-center text-2xl tracking-tight text-transparent bg-gradient-to-r from-pink-50 via-slate-800 to-purple-800 bg-clip-text hover:text-pretty">
                    
//                        <a href={pdf} download="Resume.pdf">
//                         Download Resume
                         
//                     </a>
                    
//                 </div>  
//             </motion.div>
             
//         </div>
//     </div>
//   );
// };

// export default About;



import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
// import pdf from "../pdf/resume.pdf";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pb-4 border-b border-neutral-900" id="about">
      <h1 className="my-20 text-4xl text-center">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about"></img>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center items-center lg:justify-start">
            <p className="my-2 flex items-center justify-center max-w-xl p-6">
              {ABOUT_TEXT}
            </p>
          </div>

          <div className="flex justify-center lg:justify-start mt-4">
            <a
              href=""
              // download=""
              className="text-2xl tracking-tight text-transparent bg-gradient-to-r from-pink-600 via-slate-100 to-[#9510f4] bg-clip-text hover:text-pretty py-2 px-4 border border-neutral-900 rounded-lg hover:bg-slate-800 hover:text-white transition duration-300 ease-in-out"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

