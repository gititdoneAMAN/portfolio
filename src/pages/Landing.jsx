import React, { useRef } from "react";
import main from "../photos/1.png";
import main2 from "../photos/2.png";
import main3 from "../photos/3.png";
import main4 from "../photos/4.png";
import main5 from "../photos/5.png";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrambleAnimate from "../components/ScrambleAnimate";

const Landing = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const iconRef1 = useRef(null);
  const iconRef2 = useRef(null);
  const modelRef = useRef(null);

  const tl = gsap.timeline({});

  useGSAP(() => {
    gsap.to(box1.current, {
      duration: 1,
      scrambleText: "THIS IS NEW TEXT",
    });

    box1.current.addEventListener("mouseenter", () => {
      gsap.to(box1.current, {
        scale: 1.1,
      });
      gsap.fromTo(
        iconRef1.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scale: 1.2,
          backgroundColor: "red",
          textDecoration: "underline",
        }
      );
    });
    box1.current.addEventListener("mouseleave", () => {
      gsap.to(iconRef1.current, {
        scale: 1.0,
        backgroundColor: "white",
        textDecoration: "none",
      });
      gsap.to(box1.current, {
        scale: 1.0,
      });
    });
    box2.current.addEventListener("mouseenter", () => {
      gsap.to(box2.current, {
        scale: 1.1,
      });
      gsap.fromTo(
        iconRef2.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scale: 1.2,
          backgroundColor: "red",
          textDecoration: "underline",
        }
      );
    });
    box2.current.addEventListener("mouseleave", () => {
      gsap.to(iconRef2.current, {
        scale: 1.0,
        backgroundColor: "white",
        textDecoration: "none",
      });
      gsap.to(box2.current, {
        scale: 1.0,
      });
    });
  }, []);

  return (
    <div className="w-full flex justify-between items-center px-10 relative overflow-hidden">
      <div
        ref={box1}
        className="flex  w-[20vw] flex-col font-['MPS_Sans_Pixel'] text-xl bg-black rounded text-white py-2 pl-4 pr-6  relative left-[-1.5rem]"
      >
        <span className="mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-8 p-1 bg-white text-black rounded-full"
            ref={iconRef1}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </span>
        <ScrambleAnimate content={"From"} />
        <ScrambleAnimate content={"Bengaluru, India"} />
      </div>
      <div className=" h-[80vh] flex items-center justify-center relative">
        <div
          className="absolute text-white flex flex-col text-[3rem] font-extrabold text-center"
          id="hello"
        >
          {/* <span className="font-['Noto_Sans_Devanagri']">नमस्ते</span> */}
          <ScrambleAnimate content="Hello" styleData={"z-10"} />
          {/* <span>Hola</span>
          <span>Ciao</span> */}
        </div>
        <motion.img
          src={main4}
          alt="img"
          className="h-full"
          initial={{ z: 0 }}
          animate={{ rotateZ: 360 }}
          transition={{ repeat: Infinity, duration: 15 }}
        />
      </div>
      <div
        ref={box2}
        className="flex w-[20vw] flex-col font-['MPS_Sans_Pixel'] rounded justify-center text-xl items-start bg-gray-200 p-2 relative right-[-1.5rem]"
      >
        <span className="mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-8 p-1 bg-white rounded-full"
            ref={iconRef2}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </span>
        <ScrambleAnimate content={"Ui/Ux Designer"} />
        <ScrambleAnimate content={"Full-Stack Developer"} />
      </div>
    </div>
  );
};

export default Landing;
