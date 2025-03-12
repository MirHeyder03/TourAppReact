import React from "react";
import Header from "../../components/layout/Header";
import AboutCities from "./AboutCities";
import AboutTour from "./AboutTour";
import Hero from "./Hero";
import Inclusions from "./Inclusions";
import TourDetails from "./TourDetails";

const TourInnerPage = () => {
  return (
    <div>
      <Header currentPage={2} color="white" />
      <Hero />
      <AboutCities />
      <AboutTour />
      <TourDetails />
      <Inclusions />
    </div>
  );
};

export default TourInnerPage;
