import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import me from "../assets/me.png";

function Me() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <motion.div className="w-full h-full md:mt-20 lg:mt-40 pb-24 flex flex-col md:flex-row justify-center items-center overflow-hidden">
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        initial={{ x: -200, opacity: 0 }}
        className="w-full h-fit md:p-8 flex justify-center items-center md:items-start mt-8 md:mt-0 flex-col font-medium"
      >
        <h1 className="w-5/6 md:w-full text-white  md:-mt-0 text-center md:text-start mb-8 sm:mb-4 text-2xl  md:text-4xl">
          <p className="opacity-80 mb-4">Hi! My name is</p>{" "}
          <b className="opacity-100">Martin Costa Daddato</b>
        </h1>
        <h2 className=" w-5/6 opacity-50 text-md text-justify text-sm md:text-lg tracking-tight">
          React Developer base on Mar del Plata, Buenos Aires, Argentina. <br />
          I am a passionate, course-trained and self-taught React developer.{" "}
          <br />
          My perfectionist approach drives me to optimize and get things done
          right and fast. <br />
          Always excited to learn and face new challenges in technology.
        </h2>
        <div className="w-5/6 justify-between mt-4 md:mt-8 flex flex-row items-center mb-16 md:mb-0">
          <motion.button className=" relative" layout>
            <motion.p
              layout="position"
              className=" underline underline-offset-8 text-emerald-500 hover:text-cyan-700 leading-7"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 1 }}
              onClick={() => {
                setIsCvOpen(!isCvOpen);
              }}
            >
              View CV
            </motion.p>

            {isCvOpen ? (
              <div className="absolute w-48 justify-start items-start flex flex-col mt-4 md:mt-8 gap-6 md:gap-8 text-white">
                <AnimatePresence>
                  <motion.a
                    href="https://drive.google.com/file/d/1Y2cAaArnkN35QpFGxyip_9bbNVU23-nZ/view?usp=sharing"
                    className="w-36 text-start hover:underline underline-offset-8"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    target="_blank"
                  >
                    English CV
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/file/d/1YFdKxDfDCcXdhp7kTaDEFduJItCPA_Dy/view?usp=sharing"
                    target="_blank"
                    className="w-36 text-start hover:underline underline-offset-8 "
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
          <motion.div
            className="flex items-center gap-14 text-emerald-500"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", delay: 1 }}
          >
            <a
              className="hover:opacity-50"
              href="https://www.linkedin.com/in/martincostadaddato/"
              target="__BLANK"
            >
              <BsLinkedin size={28} />
            </a>
            <a
              className="hover:opacity-50"
              href="https://github.com/MartinCostaDaddato"
              target="__BLANK"
            >
              <BsGithub size={28} />
            </a>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        initial={{ opacity: 0, scale: 0 }}
        className="w-full flex justify-center mt-10 md:m-0"
      >
        <img src={me} alt="yo" className="w-72 md:w-[30rem] object-contain" />
      </motion.div>
    </motion.div>
  );
}

export default Me;
