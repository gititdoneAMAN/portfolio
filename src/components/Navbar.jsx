import React, { useEffect, useRef, useState } from "react";
import ScrambleAnimate from "./ScrambleAnimate";
import ScrambleAnimateLink from "./ScrambleAnimateLink";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
        setShowMenu(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full bg-transparent backdrop-blur-lg z-[100] px-5 md:px-10 py-2.5 md:py-5 fixed flex justify-between items-center">
      <div className="logo text-3xl  md:text-4xl">
        <span>A</span>
        <span>M</span>
        <span>A</span>
        <span>N</span>
      </div>
      <div>
        {showHamburger ? (
          <>
            <Hamburger onClick={() => setShowMenu(!showMenu)} />
            {showMenu && (
              <div className="fixed h-[100vh] w-[100vw] inset-0 z-50 bg-black flex flex-col justify-center items-center text-white">
                <div className="absolute top-5 right-5">
                  <CloseIcon onClick={() => setShowMenu(!showMenu)} />
                </div>
                <ul className="flex flex-col text-center p-5 gap-8 text-lg font-['MPS_Sans_Pixel'] font-light">
                  <a
                    href={"#about"}
                    className="cursor-pointer"
                    onClick={() => setShowMenu(false)}
                  >
                    About
                  </a>
                  <a
                    href={"#projects"}
                    className="cursor-pointer"
                    onClick={() => setShowMenu(false)}
                  >
                    Projects
                  </a>
                  <a
                    href={"#contact"}
                    className="cursor-pointer"
                    onClick={() => setShowMenu(false)}
                  >
                    Contact
                  </a>
                  <a
                    href={
                      "https://drive.google.com/file/d/1suMIYJrtugAOPXc0vdMTjNiRgueuRdX0/view?usp=sharing"
                    }
                    className="py-2 px-3 bg-white text-black rounded cursor-pointer"
                    onClick={() => setShowMenu(false)}
                  >
                    Resume
                  </a>
                </ul>
              </div>
            )}
          </>
        ) : (
          <div className="flex gap-10 items-center text-md">
            <ul>
              <ScrambleAnimateLink
                content="About"
                styleData={"cursor-pointer w-[5vw]"}
                link={"#about"}
              />
            </ul>
            <ul>
              <ScrambleAnimateLink
                content="Projects"
                styleData={"cursor-pointer w-[5vw]"}
                link={"#projects"}
              />
            </ul>
            <ul>
              <ScrambleAnimateLink
                content="Contact"
                styleData={"cursor-pointer w-[5vw]"}
                link={"#contact"}
              />
            </ul>
            <ul className="ml-[10rem] w-[8rem] hover:text-red-600 cursor-pointer text-white px-3 py-2 rounded text-lg flex gap-2 bg-black">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </span>
              <ScrambleAnimateLink
                content="Resume"
                link={
                  "https://drive.google.com/file/d/1suMIYJrtugAOPXc0vdMTjNiRgueuRdX0/view?usp=sharing"
                }
              />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

function Hamburger({ onClick }) {
  return (
    <svg
      onClick={onClick}
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
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function CloseIcon({ onClick }) {
  return (
    <svg
      onClick={onClick}
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
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
