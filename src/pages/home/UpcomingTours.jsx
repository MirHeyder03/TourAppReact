import React, { useEffect, useState } from "react";
import Tour from "../../components/common/Tour";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
    <div className="flex flex-col items-center justify-center my-10 bg-white h-100">
      <p className="mb-10 text-5xl font-bold text-center max-xss:text-3xl md:text-7xl text-darkerGreen font-primary">
        Upcoming Tours
      </p>
      <div className="flex flex-col flex-wrap items-center justify-center gap-x-3 md:flex-row">
        {tours?.map((tour) => (
          <Tour
            key={""}
            title={""}
            date={""}
            time={""}
            thumbnail={""}
            price={""}
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
export default UpcomingTours;
