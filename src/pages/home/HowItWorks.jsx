import React from "react";
import CloudCheck from "../../assets/icons/CloudCheck.svg";
import OutlineFileSearch from "../../assets/icons/OutlineFileSearch.svg";
import PaperPlane from "../../assets/icons/OutlinePaperPlane.svg";

const HowItWorks = () => {
  return (
    <div className="bg-howItWorks relative w-screen h-[80vh] bg-no-repeat bg-cover bg-center max-w-full">
      <div className="absolute top-0 flex flex-col justify-center w-full h-full gap-20 bg-white bg-whiteGradient text-7xl bg-opacity-80">
        <p className="mt-10 text-4xl font-bold text-center md:text-7xl text-darkerGreen">
          How it works?
        </p>
        <div className="flex flex-col md:flex-row justify-around md:justify-around items-center px-5 md:px-[5rem] gap-12">
          <div
            id="howItWorksEl1"
            className="flex flex-col flex-wrap items-center justify-between gap-y-4"
          >
            <img
              src={OutlineFileSearch}
              className="md:w-[6rem] w-[4rem]"
              alt="notepad"
            />
            <p className="text-2xl font-normal text-center text-greyish">
              Explore Tours
            </p>
          </div>
          <div
            id="howItWorksEl2"
            className="flex flex-col items-center justify-between gap-y-4"
          >
            <img
              src={PaperPlane}
              className="md:w-[6rem] w-[4rem]"
              alt="paperplane"
            />
            <p className="text-2xl text-center text-greyish">Find your tours</p>
          </div>
          <div
            id="howItWorksEl2"
            className="flex flex-col items-center justify-between gap-y-4"
          >
            <img
              src={CloudCheck}
              className="md:w-[6rem] w-[4rem]"
              alt="paperplane"
            />
            <p className="text-2xl font-normal text-center text-greyish">
              Start booking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
