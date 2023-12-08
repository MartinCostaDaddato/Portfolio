import { useState } from "react";
import { motion } from "framer-motion";
import pk from "../assets/pk.png";
import bagues from "../assets/bagues.png";
import argentv from "../assets/argentv.png";

function Projects() {
  const projects = [
    {
      name: "ArgenTV",
      link: "https://argentv.vercel.app/",
      img: argentv,
      description:
        "This app was built using Next.js 14, styled with Tailwind CSS, and animated with Framer Motion. The purpose of the app is to showcase all the television and radio stations in Argentina that stream for free on YouTube every day.",
    },
    {
      name: "Pokemon Chat",
      link: "https://pokemonchat-martin-costa-daddato.netlify.app/",
      img: pk,
      description:
        "This app was made in React + Tailwindcss and the objective is to talk with your favorite pokemon. They will answer you by artificial intelligence thanks to the Open AI API (ChatGPT 3.5 Turbo) based on an initial promt of configuration.",
    },
    {
      name: "Bagues Ecommerce",
      link: "https://bagues-ecommerce-martin-costa-daddato.netlify.app/",
      img: bagues,
      description:
        "This ecommerce was made in React + Tailwind and Firebase as backend database. The products are part of the Bagues Essences collection and is an internship project as it is the final project of the React Js course at Coderhouse, which got the highest grade.",
    },
  ];

  const [isOpen, setIsOpen] = useState(Array(projects.length).fill(false));

  const handleCardClick = (index) => {
    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = !updatedOpenState[index];
    setIsOpen(updatedOpenState);
  };

  return (
    <motion.div className=" w-full h-full flex flex-col items-center ">
      <motion.p
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className=" my-10 text-3xl md:text-5xl font-bold "
      >
        Projects
      </motion.p>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:flex-wrap gap-12 w-full">
        {projects.map((item, index) => (
          <motion.div
            layout
            onClick={() => handleCardClick(index)}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{
              layout: { duration: 0.5, type: "" },
              duration: 1,
              type: "spring",
            }}
            className=" xl:w-1/3 p-7 border rounded-xl border-emerald-500 font-bold text-center relative w-full"
            key={item.name}
          >
            <motion.h2
              layout
              className="text-white text-3xl hover:text-emerald-500"
            >
              {item.name}
            </motion.h2>
            {isOpen[index] ? (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col text-start mt-10  w-full"
              >
                <p className="text-sm">{item.description}</p>
                <img src={item.img} className=" h-40 self-center mt-8" />
                <motion.a
                  href={item.link}
                  target="__BLANK"
                  className="self-center p-4 mt-8 border hover:border-emerald-500 hover:text-emerald-500"
                >
                  View on browser
                </motion.a>
              </motion.div>
            ) : null}
          </motion.div>
        ))}
      </div>
      <motion.p
        layout="position"
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        transition={{
          delay: 1.5,
          type: "spring",
          layout: { duration: 1, type: "spring" },
        }}
        className="text-md md:text-xl mt-8 relative"
      >
        More projects coming soon... 👀
      </motion.p>
    </motion.div>
  );
}

export default Projects;
