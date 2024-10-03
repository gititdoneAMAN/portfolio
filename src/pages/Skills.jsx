import React from "react";
import ProjectsCards from "../components/ProjectsCards";
import ScrambleAnimate from "../components/ScrambleAnimate";
import WebDev from "../assets/WebDev";
import Cloud from "../assets/Cloud";
import DevOps from "../assets/DevOps";
import Database from "../assets/Database";
import SkillCard from "../components/SkillCard";
import {
  ReactIcon,
  HTMLicon,
  CSSicon,
  TailwindIcon,
  PostmanIcon,
  NodejsIcon,
  ExpressIcon,
} from "../assets/WebDev";
const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full mt-5 mb-5 min-h-screen flex flex-col py-5"
    >
      <div className="flex gap-2 border-b-[1px] border-black p-5 md:px-10 md:pt-6 md:pb-8">
        <ScrambleAnimate
          content="Skills"
          styleData={"text-3xl md:text-5xl font-['MPS_Sans_Pixel'] "}
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 md:size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center py-10">
        {WebDev.map((icon, index) => (
          <SkillCard key={index}>{icon}</SkillCard>
        ))}

        {DevOps.map((icon, index) => (
          <SkillCard key={index}>{icon}</SkillCard>
        ))}
        {Database.map((icon, index) => (
          <SkillCard key={index}>{icon}</SkillCard>
        ))}
        {Cloud.map((icon, index) => (
          <SkillCard key={index}>{icon}</SkillCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
