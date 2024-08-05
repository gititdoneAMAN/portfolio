import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Marqee from "./components/Marqee";
import About from "./pages/About";
import LocomotiveScroll from "locomotive-scroll";
import Projects from "./pages/Projects";
import Eyes from "./components/Eyes";
import Bento from "./pages/Bento";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Landing />
      <Marqee />
      <Bento />
      {/* <About /> */}
      <Projects />
      {/* <Eyes /> */}
    </div>
  );
};

export default App;
