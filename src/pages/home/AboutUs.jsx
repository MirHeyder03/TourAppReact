import React from "react";
import AboutPic from "../../assets/img/AboutImage.png";

const AboutUs = () => {
  return (
    <div className="h-full bg-white">
      <h1 className="pt-20 mr-0 font-bold text-center text-darkerGreen md:text-right text-7xl md:mr-36 ">
        About us
      </h1>
      <div className="flex flex-col gap-12 p-10 md:flex-row">
        <div
          style={{ backgroundImage: `url(${AboutPic})` }}
          className="border-transparent bg-center bg-no-repeat bg-cover rounded-lg h-screen w-full md:w-[40vw]"
        ></div>
        <div
          id="aboutText"
          className="flex flex-col gap-3 text-xl md:text-3xl font-thin w-full md:w-[50vw]"
        >
          <p>
            We are ready to help you to spend an amazing vacation day in our
            country's various places. Our company is a trusted professional
            company based in Azerbaijan. You will be provided with deatiled
            information about accommodation, meals, transport services. The
            highly-experiences, well-developed, multicultural guides will
            satisfy all the things you need in your vacation.
          </p>
          <p className="text-darkerGreen ">
            We guide you to see wonderful views both in cities and countryside.
          </p>
          <p>
            Tours in Azerbaijan will impress you with its places and traditions.
            Our company plays an important role to help you discover incredible
            places here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
