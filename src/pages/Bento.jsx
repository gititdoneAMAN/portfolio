import React from "react";
import profile from "../photos/profile.jpg";
import videoN from "../photos/video5.mp4";
import video1 from "../photos/video6.mp4";
import videop from "../photos/video4.webm";
import { motion } from "framer-motion";

const Bento = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-10 pt-[5rem] pb-[4rem] bg-black bg-[url('./photos/rrreflection.svg')] ">
      <div className="grid grid-cols-10 grid-rows-6 gap-2 h-full w-full">
        <div className="col-span-7 row-span-1  flex justify-center items-center">
          <video
            src={videoN}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-3xl"
          ></video>
        </div>
        <div className="rounded-3xl col-span-3 object-cover row-span-5 bg-gray-300">
          <img
            className="w-full rounded-3xl h-full object-cover"
            src={profile}
            alt="img"
          />
        </div>
        <div className="col-span-7  flex flex-col justify-center gap-1 row-span-3 relative bg-[#cdea68] p-4 rounded-3xl">
          <motion.span
            initial={{ y: -100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-lg text-black font-['Rejouice_Headline']"
          >
            Hey There,
          </motion.span>
          <motion.span
            initial={{ y: -100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-lg text-black font-['Rejouice_Headline']"
          >
            I hope you're doing great. I'm Aman, a fullstack developer with a
            serious passion for art and tech. I love using ReactJS, NextJS, and
            similar tools to create unique, eye-catching projects that really
            stand out on the web.
          </motion.span>
          <motion.span
            initial={{ y: -100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-lg text-black font-['Rejouice_Headline']"
          >
            Right now, I'm based in the bustling city of Bangalore, but I work
            with clients from all over the world. I'm always up for a new design
            challenge and excited about what we can create together.
          </motion.span>
        </div>
        {/* <div className="col-span-2 row-span-3 bg-gray-300"></div> */}
        <div className="col-span-3 row-span-1 p-4 cursor-pointer bg-white rounded-3xl flex justify-center gap-2 items-center">
          <span className="text-xl font-['MPS_Sans_Pixel']">CONTACT</span>
          <div className="w-4 h-4 rounded-full bg-black"></div>
        </div>
        <div className="col-span-3 row-span-1 p-4 cursor-pointer bg-red-500 text-white rounded-3xl flex justify-center gap-2 items-center">
          <span className="text-xl font-['MPS_Sans_Pixel']">PROJECTS</span>
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
        <div className="col-span-1 row-span-1 bg-gray-300 rounded-full">
          <video
            src={video1}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-full"
          ></video>
        </div>
        <div className="col-span-10 row-span-1 flex justify-between overflow-hidden rounded-3xl">
          <motion.div
            className="w-full h-full flex items-center justify-end font-bold font-['MPS_Sans_Pixel'] text-3xl text-white"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          >
            FULL STACK DEV
          </motion.div>
          <motion.div
            className="w-full h-full flex items-center justify-end font-bold font-['MPS_Sans_Pixel'] text-3xl text-white"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          >
            FULL STACK DEV
          </motion.div>
          <motion.div
            className="w-full h-full flex items-center justify-end font-bold font-['MPS_Sans_Pixel'] text-3xl text-white"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          >
            FULL STACK DEV
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
