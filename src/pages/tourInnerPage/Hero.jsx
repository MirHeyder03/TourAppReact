import React from "react";
import Grid1 from "../../assets/img/tourBg/Scenery.png";
import Grid2 from "../../assets/img/tourBg/AlbanKilsesi.png";
import Grid3 from "../../assets/img/tourBg/BakuF1.png";
import Grid4 from "../../assets/img/tourBg/KhanPalace.png";

const images = [Grid1, Grid2, Grid3, Grid4];

let gridBackground = [];

images.forEach((image) => {
  gridBackground.push(
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-center bg-cover"
    ></div>
  );
});

const Hero = () => {
  return (
    <div id="parent" className="relative h-screen">
      <div className="grid h-full grid-cols-2 grid-rows-2">
        {gridBackground}
      </div>
      <h1 className="absolute text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2 select-none md:text-7xl top-1/2 left-1/2">
        Baku,Sheki Tour
      </h1>
    </div>
  );
};

export default Hero;
