import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
// import pdf from "../pdf/resume.pdf";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
  return (
    <div className="pb-4 border-b border-neutral-900 lg:mb-35" id="home">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                        Rishu Pandey
                    </motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                        Full Stack Web Developer
                    </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="max-w-xl py-6 my-2 font-light tracking-tighter">
                            {HERO_CONTENT}
                    </motion.p>
                    
                    {/* resume dounload link */}

            <motion.div
                 variants={container(1.5)}
                 initial="hidden"
                 animate="visible"
               className="w-full lg:w-1/2">
                <div  className="text-2xl tracking-tight text-transparent bg-gradient-to-r from-pink-600 via-slate-100 to-[#9510f4] bg-clip-text hover:text-pretty py-2 px-4 border border-neutral-900 rounded-lg hover:bg-slate-800 hover:text-white transition duration-300 ease-in-out">

                    <a
                        href="#"
                        // download=""
                    >
                        Download Resume
                    </a>
                    
                </div>  
            </motion.div>                    


                    
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 ">
                <div className="flex justify-center">
                    <motion.img
                        className="rounded-3xl"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x:0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={profilePic} alt="Rishu Pandey"
                    />
                </div>
            </div>
        </div>
      
    </div>
  );
};

export default Hero;
