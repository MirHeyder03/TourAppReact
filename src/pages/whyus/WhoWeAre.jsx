import React from "react";
import AboutPic from "../.././assets/img/AboutImage.png";
import AboutPic2 from "../.././assets/img/lankaran3.png";
const WhoWeAre = () => {
  return (
    <div className="mt-20">
      <div className="my-12">
        <h3 className="font-bold text-center text-darkerGreen 2xl:text-6xl md:text-5xl sm:text-4xl lg:text-5xl xl:text-5xl max-sm:text-3xl">
          About
        </h3>
      </div>
      <div className="flex space-y-8 2xl:justify-center lg:justify-center xl:justify-center xl:flex-row 2xl:flex-row 2xl:gap-0 xl:gap-16 lg:gap-10 md:mx-auto lg:text-start md:text-center md:flex-col sm:text-center 2xl:text-start xl:test-start sm:flex-col lg:flex-row max-sm:flex-col max-sm:text-center">
        <div className="md:mx-auto sm:mx-auto max-sm:mx-auto 2xl:ml-90 lg:ml-15">
          <img
            src={AboutPic}
            alt=""
            className="max-w-lg 2xl:w-[466px] xl:w-[400px] lg:w-[400px] md:w-[400px] 2xl:h-[699px] xl:h-[600px] lg:h-[550px] md:h-[550px] max-sm:h-[520px] max-sm:w-[350px] max-xss:w-[250px] max-xss:h-[400px]"
          />
        </div>
        <div className="md:mx-auto sm:mx-auto">
          <h4 className="font-bold text-center text-darkerGreen 2xl:text-6xl md:text-5xl sm:text-4xl lg:text-5xl xl:text-5xl max-sm:text-3xl 2xl:mb-12 lg:mb-12 md:mb-7 sm:mb-5 max-sm:mb-4">
            Who we are?
          </h4>
          <p className="max-w-2xl text-black-rgba 2xl:text-3xl xl:text-3xl lg:text-xl md:text-2xl sm:text-2xl max-sm:text-lg max-xss:text-lg max-xss:mx-4 max-sm:mx-4 md:mx-4">
            We are ready to help you to spend an amazing vacation day in our
            country’s various places. Our company is a trusted professional
            company based in Azerbaijan. You will be provided with deatiled
            information about accommodation, meals, transport services. The
            highly-experiences, well-developed, multicultural guides will
            satisfy all the things you need in your vacation. The
            highly-experiences, well-developed, multicultural guides will
            satisfy all the things you need in your vacation.
          </p>
        </div>
      </div>

      <div className="flex justify-evenly xl:flex-row 2xl:flex-row md:flex-col lg:flex-col sm:flex-col max-sm:fle-col md:text-center lg:text-center sm:text-center max-sm:text-center 2xl:text-start xl:text-start max-sm:flex-col">
        <div className="max-w-md mt-10 md:mx-auto sm:mx-auto max-sm:mx-auto">
          <h4 className="mb-6 font-bold 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-xl text-darkerGreen">
            We guide you to see wonderful views both in cities and countryside.{" "}
          </h4>
          <p className="text-black-rgba 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-xl">
            Tours in Azerbaijan will impress you with its places and traditions.
            Our company plays an important role to help.
          </p>
        </div>
        <div className="md:mx-auto sm:mx-auto max-sm:mx-auto md:mt-7 sm:mt-5 max-sm:mt-5">
          <img
            src={AboutPic2}
            alt={AboutPic2}
            className="2xl:w-[580px] 2xl:h-[364px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
