import React from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Tour = ({ thumbnail, title, date, price }) => {
  const yellowStyle = { color: "#E8A908" };
  return (
    <div className="flex flex-col justify-center items-left">
      <div
        id="tourImage"
        style={{ backgroundImage: `url(${thumbnail})` }}
        className="border-transparent bg-cover bg-center rounded-lg md:px-36 w-full h-[70vh] m-2"
      ></div>
      <div className="flex flex-col items-left gap-y-4">
        <p className="text-3xl font-semibold text-left font-primary text-darkerGreen">
          {title}
        </p>
        <p className="flex flex-row gap-2 text-2xl font-normal text-left text-black font-primary">
          <AiOutlineCalendar style={yellowStyle} />
          {date}
        </p>
        <p className="flex flex-row justify-between gap-2 text-2xl font-normal text-left text-black font-primary">
          <span className="flex flex-row gap-2">
            <AiOutlineClockCircle style={yellowStyle} />
            {time}
          </span>
          <span style={yellowStyle} className="font-medium">
            {price}$
          </span>
        </p>
        <NavLink
          exact
          to="/tourInnerPage"
          className="bg-darkerGreen font-primary text-white w-full h-[20%] border-2 border-transparent rounded-lg text-2xl flex items-center justify-center hover:bg-transparent hover:border-darkerGreen hover:text-darkerGreen transition-all duration-200 md:h-[10vh]"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default Tour;
