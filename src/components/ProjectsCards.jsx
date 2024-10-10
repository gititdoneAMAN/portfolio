import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useRef } from "react";
import ScrambleAnimate from "./ScrambleAnimate";

const ProjectsCards = ({
  project1,
  project2,
  project1Skills,
  project2Skills,
}) => {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    boxRef1.current.addEventListener("mouseenter", () => {
      gsap.to(boxRef1.current, {
        scale: 0.95,
      });
      gsap.to(textRef.current, {
        textContent: project1,
        scale: 1.5,
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
      });
    });

    boxRef1.current.addEventListener("mouseleave", () => {
      gsap.to(boxRef1.current, {
        scale: 1,
      });
      gsap.to(textRef.current, {
        textContent: "",
        scale: 1,
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    });
    boxRef2.current.addEventListener("mouseenter", () => {
      gsap.to(boxRef2.current, {
        scale: 0.95,
      });
      gsap.to(textRef.current, {
        textContent: project2,
        scale: 1.5,
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
      });
    });
    boxRef2.current.addEventListener("mouseleave", () => {
      gsap.to(boxRef2.current, {
        scale: 1,
      });
      gsap.to(textRef.current, {
        textContent: "",
        scale: 1,
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 gap-2 md:gap-4 mt-[4rem] w-full relative">
      <div>
        <div className="flex gap-2 items-center mb-5">
          <div className="bg-black rounded-full h-[5px] w-[5px] p-1.5"></div>
          <span>{project1}</span>
        </div>
        <motion.div
          ref={boxRef1}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[60vh] md:h-[40vw] bg-[#CACACB] rounded-lg"
        ></motion.div>
        <div className="flex flex-wrap gap-2 mt-5">
          {project1Skills.map((tech, index) => (
            <span
              key={index}
              className="rounded-3xl text-sm cursor-pointer hover:bg-black transition ease-in hover:text-red-400 px-2 pt-1 pb-1 border-[2px] border-black font-['Rejouice_Headline']"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div
        ref={textRef}
        className="absolute hidden md:visible top-[45%] left-[45%] z-20 font-bold font-['MPS_Sans_Expressive'] text-[#cdea68] text-5xl"
      ></div>
      <div>
        <div className="flex gap-2 items-center mb-5">
          <div className="bg-black rounded-full h-[5px] w-[5px] p-1.5"></div>
          <span>{project2}</span>
        </div>
        <motion.div
          ref={boxRef2}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full  h-[60vh] md:h-[40vw] bg-black rounded-lg"
        ></motion.div>
        <div className="flex flex-wrap gap-2 mt-5">
          {project2Skills.map((tech, index) => (
            <span
              key={index}
              className="rounded-3xl text-sm cursor-pointer hover:bg-black transition ease-in hover:text-red-400 px-2 pt-1 pb-1 border-[2px] border-black font-['Rejouice_Headline']"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
