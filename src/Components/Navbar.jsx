import { motion } from "framer-motion";
import { BiUser, BiTask, BiBookBookmark, BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <motion.div
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
      className=" border-b border-emerald-500  flex items-center p-3 justify-evenly lg:m-0"
    >
      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-2 hover:text-cyan-700 text-sm "
      >
        <BiUser size="2rem" color="#26D4A3" />
        About Me
      </Link>

      <Link
        to="/Projects"
        className="flex flex-col justify-center items-center gap-2  hover:text-cyan-700 text-sm "
      >
        <BiTask size="2rem" color="#26D4A3" />
        Projects
      </Link>

      <Link
        to="Studies"
        className="flex flex-col justify-center items-center gap-2 hover:text-cyan-700 text-sm "
      >
        <BiBookBookmark size="2rem" color="#26D4A3" />
        Studies
      </Link>

      <Link
        to="Contact"
        className="flex flex-col justify-center items-center gap-2 hover:text-cyan-700 text-sm "
      >
        <BiMailSend size="2rem" color="#26D4A3" />
        Contact
      </Link>
    </motion.div>
  );
}

export default Navbar;
