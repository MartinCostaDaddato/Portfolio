import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import me from "../assets/me.png";
import EngCV from "../assets/ENG Martin Costa Daddato React Developer.pdf";
import EspCV from "../assets/ESP Martin Costa Daddato Desarrollador React.pdf";

function Me() {
  const [isCvOpen, setIsCvOpen] = useState(false);

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
          React Developer base on Mar del Plata, Buenos Aires, Argentina. <br />
          <br />I am a passionate, course-trained and self-taught React
          developer. <br />
          <br /> My perfectionist approach drives me to optimize and get things
          done right and fast. <br /> Always excited to learn and face new
          challenges in technology.
        </h2>
        <motion.button className="mt-8 relative " layout>
          <motion.p
            layout
            className="underline underline-offset-8 text-emerald-500 hover:text-cyan-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => {
              setIsCvOpen(!isCvOpen);
            }}
          >
            Download CV
          </motion.p>
          {isCvOpen ? (
            <div className="absolute justify-start items-start flex flex-col mt-6 md:mt-8 gap-6 md:gap-8 text-white">
              <AnimatePresence>
                <motion.a
                  href={EngCV}
                  download="ENG CV Martin Costa D'addato"
                  className="hover:underline underline-offset-8"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  English CV{" "}
                </motion.a>
                <motion.a
                  href={EspCV}
                  download="ESP CV Martin Costa D'addato"
                  className="hover:underline underline-offset-8"
                  initial={{ y: -40 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  Spanish CV
                </motion.a>
              </AnimatePresence>
            </div>
          ) : null}
        </motion.button>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        initial={{ opacity: 0, scale: 0 }}
        className="w-full flex justify-center mb-4 mt-20 md:m-0"
      >
        <img src={me} alt="yo" className="w-72 md:w-[30rem] object-contain" />
      </motion.div>
    </motion.div>
  );
}

export default Me;
