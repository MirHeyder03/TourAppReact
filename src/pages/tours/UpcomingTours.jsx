import React, { useEffect, useState } from "react";
import axios from "axios";
import Tour from "../../components/common/Tour";
import { NavLink } from "react-router-dom";

const UpcomingTours = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    getAllTours();
  }, []);
  const url = "https://admintour.thejavachip.com/api/upcoming_tour";
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
    <div className="flex flex-col items-center justify-center pt-10 bg-akaroa ">
      <p className="mb-10 text-2xl font-bold text-center text-darkerGreen font-primary md:text-7xl">
        Upcoming Tours
      </p>
      <div className="bg-akaroa grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-[2em] justify-center content-center">
        {tours?.map((tour) => (
          <Tour
            title={tour.title}
            date={tour.date}
            time={tour.time}
            thumbnail={tour.thumbnail}
            price={tour.price}
          />
        ))}
      </div>
      {tours?.length > 0 && (
        <div className="flex items-center justify-center w-full py-10 text-2xl font-semibold bg-akaroa">
          <NavLink
            exact
            to="/tours"
            className="transition-all duration-200 border-2 border-transparent text-darkerGreen font-primary hover:border-b-darkerGreen"
          >
            View more
          </NavLink>
        </div>
      )}
    </div>
  );
};
export default UpcomingTours;
