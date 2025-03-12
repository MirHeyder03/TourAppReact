import React from "react";
import Header from "../../components/layout/Header";
import Hero from "./Hero";
import Video from "./Video";
import UpcomingTours from "./UpcomingTours";

const Tours = () => {
  return (
    <>
      <Header currentPage={2} color="#666666" />
      <Hero className="mt-10" />
      <Video />
      <UpcomingTours />
    </>
  );
};
export default Tours;
