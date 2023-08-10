import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaGit, FaGithub } from "react-icons/fa6";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoFirebase } from "react-icons/bi";
import {PiFramerLogoFill} from "react-icons/pi"

function Studies() {
  const iconSize = 50;
  const stack = [
    {
      name: "React Js",
      logo: <FaReact size={iconSize} />,
      delay: 0.5
    },
    {
      name: "Tailwind CSS",
      logo: <BiLogoTailwindCss size={iconSize} />,
      delay: 0.6
    },
    {
      name: "Framer Motion",
      logo: <PiFramerLogoFill size={iconSize}/>,
      delay: .7
    },
    {
      name: "Firebase",
      logo: <BiLogoFirebase size={iconSize} />,
      delay: .8
    },
    {
      name: "Git",
      logo: <FaGit size={iconSize}/>,
      delay: .9
    },
    {
      name: "Github",
      logo: <FaGithub size={iconSize}/>,
      delay: 1
    },
    {
      name: "HTML 5",
      logo: <BiLogoHtml5 size={iconSize} />,
      delay: 1.1
    },
    {
      name: "CSS 3",
      logo: <BiLogoCss3 size={iconSize} />,
      delay: 1.2
    },
    {
      name: "Javascript",
      logo: <BiLogoJavascript size={iconSize} />,
      delay: 1.3
    },
  ];
  return (
    <div className="h-full w-full flex flex-col md:flex-row md:mt-28 justify-between items-center overflow-hidden">
      <motion.div className="h-full w-full md:h-full  flex flex-col  items-center mt-4">
        <motion.p
          className="lg:text-4xl font-bold tracking-wider lg:mb-12"
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          Education
        </motion.p>

        <motion.div className="flex flex-col mt-6 lg:m-0">
          <motion.div
            className="flex flex-col border-l-2 px-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.p
              className=" lg:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Oracle Next Education by <b>Oracle</b>
            </motion.p>
            <motion.p
              className="italic font-bold tracking-wide mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Graduated as Frontend Developer
            </motion.p>
            <motion.div className="flex justify-between mt-8 mb-2 items-center">
              <div className="flex gap-5 ">
                <motion.div
                  className="flex flex-col items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <FaHtml5 size={30} />
                </motion.div>

                <motion.div
                  className="flex flex-col items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <FaCss3Alt size={30} />
                </motion.div>

                <motion.div
                  className="flex flex-col items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <FaJs size={30} />
                </motion.div>
              </div>
              <motion.a
                href="https://app.aluracursos.com/degree/certificate/3e898540-7977-4b74-8d65-886074eba997"
                target="__BLANK"
                className="self-end mb-2  hover:underline underline-offset-8 hover:text-emerald-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                View Certificate
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col border-l-2 px-4 mt-12 lg:mt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.p
              className="text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              React Js by <b>Coderhouse</b>
            </motion.p>
            <motion.p
              className="italic font-bold tracking-wide mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              Graduated as React Js Developer
            </motion.p>
            <motion.div className="flex justify-between mt-8 mb-4 items-center">
              <div className="flex gap-5">
                <motion.div
                  className="flex flex-col items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <FaReact size={30} />
                </motion.div>

                <motion.div
                  className="flex flex-col items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <BiLogoTailwindCss size={30} />
                </motion.div>

                <motion.div
                  className="flex flex-col items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <BiLogoFirebase size={30} />
                </motion.div>
              </div>
              <motion.a
                href="https://i.imgur.com/iBxZGp5.png"
                target="__BLANK"
                className="self-end underline-offset-8 hover:underline hover:text-emerald-500 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                View Certificate
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="h-full w-full  flex  justify-start items-center  flex-col">
        <motion.p
          className="text-xl lg:text-4xl font-bold tracking-wider mb-6 lg:mb-14"
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          My Stack
        </motion.p>
        <motion.div
          className="grid grid-cols-3 gap-4 text-sm lg:text-base md:gap-10 lg:gap-16 "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
        >
          {stack.map((item) => (
            <motion.div
              className="flex flex-col items-center font-bold justify-center gap-2 lg:gap-4"
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: item.delay }}
            >
              {item.logo}
              <motion.p className="text-center">{item.name}</motion.p>
            </motion.div>
          ))}

          
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Studies;
