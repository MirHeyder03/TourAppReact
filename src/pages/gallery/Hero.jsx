import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GalleryComponent from "./GalleryComponent";
import axios from "axios";

const Hero = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const url = "https://admintour.thejavachip.com/api/gallery";
    const getAllTours = async () => {
      await axios
        .get(url)
        .then((response) => {
          setPhotos(response?.data?.gallery);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllTours();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-10 h-100 bg-khaki">
      <p className="mb-10 font-bold text-center 2xl:text-7xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl max-xss:text-4xl text-darkerGreen font-primary">
        Gallery
      </p>
      <GalleryComponent photos={photos} />
      {photos && (
        <NavLink
          exact
          to="/gallery"
          className="flex flex-row items-center justify-center px-5 py-3 mt-5 font-semibold text-center transition-all duration-300 border-2 rounded-lg border-darkerGreen text-darkerGreen font-primary hover:border-green hover:text-green"
        >
          See more
        </NavLink>
      )}
    </div>
  );
};

export default Hero;
