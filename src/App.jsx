import React from "react";
import { Footer, Eyee, Feature, Landing, Marquee, About, Cards } from "./index";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full bg-zinc-700  text-white">
        <Landing />
        <Marquee />
        <About />
        <Eyee />
        <Feature />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default App;
