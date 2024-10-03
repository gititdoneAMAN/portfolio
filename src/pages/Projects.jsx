import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useRef } from "react";
import ProjectsCards from "../components/ProjectsCards";
import ScrambleAnimate from "../components/ScrambleAnimate";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full mt-5 mb-5 min-h-screen flex flex-col py-5"
    >
      <div className="flex gap-2 border-b-[1px] border-black p-5 md:px-10 md:pt-6 md:pb-8">
        <ScrambleAnimate
          content="Featured Projects"
          styleData={
            "text-3xl md:text-5xl md:text-5xl font-['MPS_Sans_Pixel'] "
          }
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49"
            />
          </svg>
        </span>
      </div>
      <ProjectsCards
        project1={"WALLET"}
        project2={"BLOOM"}
        project1Skills={["NextJS", "Express", "PostgresSQL"]}
        project2Skills={["ReactJS", "Hono", "PostgresSQL"]}
      />
      <ProjectsCards
        project1={"FARMSGET"}
        project2={"QUERY"}
        project1Skills={["ReactJS", "Express", "MongoDB"]}
        project2Skills={[
          "NextJS",
          "Express",
          "PostgresSQL",
          "LangChain",
          "Cohere",
          "Llama 3.1",
        ]}
      />
      <div className="flex justify-center items-center mt-10">
        <button className="flex items-center justify-between gap-2 mt-5 rounded-3xl px-5 py-3 md:px-5 md:py-3 w-[10rem] bg-black text-white">
          <ScrambleAnimate content={"VIEW MORE"} />
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </button>
      </div>
    </div>
  );
};

export default Projects;
