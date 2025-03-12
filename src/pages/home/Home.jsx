import React from "react";
import Hero from "./Hero";
import UpcomingTours from "./UpcomingTours";
import Gallery from "./Gallery";
import Header from "../../components/layout/Header";
import HowItWorks from "./HowItWorks";
import Contact from "./Contact";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <>
      <Header currentPage={1} color="white" />
      <Hero />
      <UpcomingTours />
      <Gallery />
      <HowItWorks />
      <AboutUs />
      <Contact />
    </>
  );
};
export default Home;
