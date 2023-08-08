import { motion } from "framer-motion";
import me from "../assets/me.png";

function Me() {
  return (
      <motion.div className="w-full h-full flex flex-col md:flex-row overflow-hidden">
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          initial={{ x: -200, opacity: 0 }}
          className="w-full md:p-8 flex justify-center items-center md:items-start h-full flex-col font-bold"
          >
          <h1 className="text-white text-center md:text-start text-3xl md:text-4xl w-full ">
            Hi! My name is Martin Costa Daddato
          </h1>
          <h2 className=" w-5/6 opacity-50 text-md text-justify md:text-lg">
            React Developer base on Mar del Plata, Buenos Aires, Argentina. <br /><br/>
            I am a passionate, course-trained and self-taught React developer. <br/><br/> My
            perfectionist approach drives me to optimize and get things done right
            and fast. <br /> Always excited to learn and face new challenges in
            technology.
          </h2>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 2 }}
          initial={{ opacity: 0, scale: 0 }}
          className="w-full flex justify-center mb-24 md:mb-0"
          >
          <img src={me} alt="yo" className="w-72 md:w-[30rem] object-contain" />
        </motion.div>
      </motion.div>
  );
}

export default Me;
