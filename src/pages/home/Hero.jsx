import React from "react";
// import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";
import HeroBg from "../../assets/img/home-hero-bg.png";
import GazangulLake from "../../assets/img/Gazangul_Lake.png";
import GrandCanyon from "../../assets/img/grandcanyon.jpg";

const images = [HeroBg, GazangulLake, GrandCanyon];

const Hero = () => {
  // const [value, setValue] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setValue((v) => {
  //       return v === (images.length - 1) ? 0 : v + 1;
  //     });
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div
      className="z-0 flex flex-col items-center justify-center h-screen text-white bg-center bg-cover"
      style={{ backgroundImage: `url(${images[0]})`, transition: "400ms" }} //should be images[value] to enable animation
    >
      <div className="flex flex-col items-center justify-center w-2/3 select-none">
        <p className="mb-5 font-bold 2xl:text-7xl xl:text-6xl md:text-6xl max-sm:text-5xl sm:text-6xl font-primary max-sm:mt-12">
          Discover incredible <span className="text-green">places in</span>{" "}
          Azerbaijan
        </p>
        <p className="mt-5 mb-10 font-semibold 2xl:text-2xl max-sm:text-lg sm:text-xl font-primary">
          We are ready to guide you to travel in places in Azerbaijan with
          information for all of them
        </p>
      </div>
      <NavLink
        exact
        to="/tours"
        className="px-5 py-3 text-3xl font-normal transition-all duration-200 border-2 border-white rounded-full mt-7 font-primary hover:border-white hover:text-green hover:bg-white"
      >
        {" "}
        Explore
      </NavLink>
    </div>
  );
};
export default Hero;
