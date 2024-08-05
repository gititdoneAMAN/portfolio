import React, { useRef } from "react";
import ScrambleAnimate from "./ScrambleAnimate";

const Navbar = () => {
  return (
    <div className="w-full px-10 py-5 flex justify-between items-baseline">
      <div className="logo text-4xl">
        <span>A</span>
        <span>M</span>
        <span>A</span>
        <span>N</span>
      </div>
      <div className="flex gap-8 items-center text-md">
        <ul>
          <ScrambleAnimate
            content="About"
            styleData={"cursor-pointer w-[4vw]"}
          />
        </ul>
        <ul>
          <ScrambleAnimate
            content="Projects"
            styleData={"cursor-pointer w-[5vw]"}
          />
        </ul>
        <ul>
          <ScrambleAnimate
            content="Contact"
            styleData={"cursor-pointer w-[5vw]"}
          />
        </ul>
        <ul className="ml-[10rem] w-[8rem] hover:text-red-600 cursor-pointer text-white px-3 py-2 rounded text-lg flex gap-2 bg-black">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </span>
          <ScrambleAnimate content="Resume" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
