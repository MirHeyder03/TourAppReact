import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GalleryComponent from "../../components/GalleryComponent/GalleryComponent";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getAllTours();
  }, []);
  const url = "https://admintour.thejavachip.com/api/gallery/random";
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
  return (
    <div className="flex flex-col items-center justify-center p-10 h-100 bg-khaki">
      <p className="mb-10 font-bold text-center text-7xl text-darkerGreen font-primary">
        Gallery
      </p>
      <GalleryComponent photos={photos} />
      {photos?.length > 0 && (
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

export default Gallery;
