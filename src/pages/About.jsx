import React, { useRef, useEffect } from "react";
import profile from "../photos/profile.jpg";
import video1 from "../photos/video4.webm";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useScramble } from "use-scramble";
import ScrambleAnimate from "../components/ScrambleAnimate";

const About = () => {
  const mainRef = useRef(null);
  const cursorRef = useRef(null);

  const { ref, replay } = useScramble({
    text: "LinkedIn",
  });

  useGSAP(() => {
    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        opacity: 1,
        scale: 1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        scale: 0,
      });
    };

    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mainElement = mainRef.current;
    mainElement.addEventListener("mouseenter", handleMouseEnter);
    mainElement.addEventListener("mouseleave", handleMouseLeave);
    mainElement.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={mainRef}
      className="w-full my-10 overflow-hidden cursor-none gap-2.5 py-10 rounded-t-3xl px-10 relative bg-white grid grid-cols-2  h-screen"
      id="about"
    >
      <div className="z-10 flex flex-col gap-10">
        <ScrambleAnimate
          content={"About"}
          styleData={
            "text-[5rem] font-['MPS_Sans_Pixel'] z-10 font-bold leading-none"
          }
        />

        <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-2.5">
          <div className="flex flex-col font-['MPS_Sans_Pixel'] rounded justify-between text-xl items-start bg-gray-200 p-2 relative">
            <span className="mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 p-1 bg-white rounded-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </span>

            <ScrambleAnimate styleData={"text-5xl"} content="Github" />
          </div>
          <div className="flex flex-col font-['MPS_Sans_Pixel'] rounded justify-between text-xl items-start bg-gray-200 p-2 relative">
            <span className="mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 p-1 bg-white rounded-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </span>

            <ScrambleAnimate styleData={"text-5xl"} content="Email" />
          </div>
          <div className="flex flex-col font-['MPS_Sans_Pixel'] rounded justify-between text-xl items-start bg-gray-200 p-2 relative">
            <span className="mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 p-1 bg-white rounded-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </span>

            <ScrambleAnimate styleData={"text-5xl"} content="LinkedIn" />
          </div>
          <div className="flex flex-col font-['MPS_Sans_Pixel'] rounded justify-between text-xl items-start bg-gray-200 p-2 relative">
            <span className="mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 p-1 bg-white rounded-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </span>

            <ScrambleAnimate styleData={"text-5xl"} content="Twitter" />
          </div>
        </div>
      </div>

      <div
        id="aboutdata"
        className="text-xl flex flex-col justify-center gap-5 bg-[url('./photos/rrreflection.svg')] shadow-md bg-center bg-no-repeat bg-cover relative z-10 w-full bg-black text-white px-4 pt-4 pb-10 rounded"
      >
        <img src={profile} className="w-[6rem] h-[6rem] rounded-full" />
        <div className="flex flex-col gap-5">
          <ScrambleAnimate speedData={1} content={"Hey! There,"} />
          <ScrambleAnimate
            speedData={1}
            stepData={5}
            content={
              "I hope you're doing great. I'm Aman, a fullstack developer with a serious passion for art and tech. I love using ReactJS, NextJS, and similar tools to create unique, eye-catching projects that really stand out on the web."
            }
          />

          <ScrambleAnimate
            speedData={1}
            stepData={5}
            content={
              "Right now, I'm based in the bustling city of Bangalore, but I work with clients from all over the world. I'm always up for a new design challenge and excited about what we can create together."
            }
          />

          <ScrambleAnimate
            speedData={1}
            content={"Looking forward to hearing from you."}
          />
        </div>
      </div>
      <div className="absolute left-0">
        <video
          src={video1}
          autoPlay
          muted
          loop
          className="w-[10rem] h-[10rem]"
        ></video>
      </div>
      <div
        ref={cursorRef}
        className=" absolute p-4 transform translate-x-[-50%] translate-y-[-50%] h-[5vw] w-[5vw] bg-transparent backdrop-blur-sm rounded-full z-20 flex justify-center items-center"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default About;
