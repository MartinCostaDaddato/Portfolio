import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5 } from "react-icons/fa6";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoFirebase } from "react-icons/bi";

function Studies() {
  const stack = [
    {
      name: "HTML 5",
      logo: <BiLogoHtml5 size={72} />,
      delay: 0.5
    },
    {
      name: "CSS 3",
      logo: <BiLogoCss3 size={72} />,
      delay: 0.6
    },
    {
      name: "Javascript",
      logo: <BiLogoJavascript size={72} />,
      delay: 0.7
    },
    {
      name: "React Js",
      logo: <FaReact size={72} />,
      delay: 0.8
    },
    {
      name: "Tailwind CSS",
      logo: <BiLogoTailwindCss size={72} />,
      delay: 0.9
    },
    {
      name: "Firebase",
      logo: <BiLogoFirebase size={72} />,
      delay: 1
    },
  ];
  return (
    <div className="h-full w-full flex flex-col lg:flex-row lg:mt-36 justify-between items-center overflow-hidden">
      <motion.div className="h-full w-full md:h-full  flex flex-col mt-8 lg:mt-0 items-center ">
        <motion.p
          className="text-4xl font-bold tracking-wider mb-8"
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          Education
        </motion.p>

        <motion.div className="flex flex-col">
          <motion.div
            className="flex flex-col border-l-2 px-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.p
              className="text-2xl"
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
            className="flex flex-col border-l-2 px-4 mt-16"
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

      <motion.div className="h-full w-full md:h-full flex  justify-start items-center  flex-col">
        <motion.p
          className="text-4xl font-bold tracking-wider mb-8 mt-8 lg:mt-0"
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          My Stack
        </motion.p>
        <motion.div
          className="grid grid-cols-3 gap-12 "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
        >
          {stack.map((item) => (
            <motion.div
              className="flex flex-col items-center font-bold justify-center"
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: item.delay }}
            >
              {item.logo}
              <motion.p>{item.name}</motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Studies;
