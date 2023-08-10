import { motion } from "framer-motion";
import { BiUser, BiTask, BiBookBookmark, BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <motion.div
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
      className=" border-b border-emerald-500  flex items-center p-8 gap-12 md:p-3 justify-evenly lg:m-0"
    >
      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-2 hover:text-cyan-700 text-sm "
      >
        <BiUser size="2rem" color="#26D4A3" />
        <p className="hidden sm:inline-block">About Me</p>
      </Link>

      <Link
        to="/Projects"
        className="flex flex-col justify-center items-center gap-2  hover:text-cyan-700 text-sm "
      >
        <BiTask size="2rem" color="#26D4A3" />
        <p className="hidden sm:inline-block">Projects</p>
      </Link>

      <Link
        to="Studies"
        className="flex flex-col justify-center items-center gap-2 hover:text-cyan-700 text-sm "
      >
        <BiBookBookmark size="2rem" color="#26D4A3" />
        <p className="hidden sm:inline-block">Studies</p>
      </Link>

      <Link
        to="Contact"
        className="flex flex-col justify-center items-center gap-2 hover:text-cyan-700 text-sm "
      >
        <BiMailSend size="2rem" color="#26D4A3" />
        <p className="hidden sm:inline-block">Contact</p>
      </Link>
    </motion.div>
  );
}

export default Navbar;
