import React, { useState } from "react";
import axios from "axios";
import Tour from "../../components/common/Tour";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Tours = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    getAllTours();
  }, []);
  const url = "https://admintour.thejavachip.com/api/tour";
  const getAllTours = async () => {
    await axios
      .get(url)
      .then((response) => {
        setTours(response?.data?.sliders);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center pt-24 mb-10 bg-white h-100">
      <p className="mb-10 text-3xl font-bold text-center text-darkerGreen font-primary md:text-7xl">
        All Tours
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-[5em] justify-
        center content-center"
      >
        {tours?.map((tour) => (
          <Tour
            title={tour.title}
            date={tour.date}
            time={tour.time}
            thumbnail={tour.thumbnail}
            price={tour.price}
            className="flex-child"
          />
        ))}
      </div>
      {tours?.length > 0 && (
        <div className="pt-10 text-2xl font-semibold transition-all duration-200 border-2 border-transparent text-darkerGreen font-primary hover:border-b-darkerGreen">
          <NavLink exact to="/tours">
            View more
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Tours;
