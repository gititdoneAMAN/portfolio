import { motion } from "framer-motion";
import React from "react";

const Marqee = () => {
  return (
    <div className="w-full py-[1.5rem] md:py-[3rem] mt-4 text-white bg-black font-['MPS_Sans_Pixel'] overflow-hidden font-extrabold rounded-t-3xl">
      <div className="text flex gap-10 text-[15vw] whitespace-nowrap leading-none border-t-2 border-b-2 border-zinc-200 py-4 md:py-8">
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
        >
          AMAN KUMAR PANDEY.
        </motion.p>
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 10,
          }}
        >
          AMAN KUMAR PANDEY.
        </motion.p>
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 10,
          }}
        >
          AMAN KUMAR PANDEY.
        </motion.p>
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 10,
          }}
        >
          AMAN KUMAR PANDEY.
        </motion.p>
      </div>
    </div>
  );
};

export default Marqee;
