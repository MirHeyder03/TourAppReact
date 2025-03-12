import React from "react";
import Resposibility1 from "../.././assets/img/resposibility1.png";
import Resposibility2 from "../.././assets/img/resposibility2.png";
import Resposibility3 from "../.././assets/img/resposibility3.png";
const Responsibility = () => {
  return (
    <div>
      <div>
        <p className="mt-16 text-xl leading-8 2xl:px-36 xl:px-32 lg:px-24 md:px-20 sm:px-10 max-sm:px-5 2xl:text-start xl:text-start md:text-center text-black-rgba max-sm:text-lg sm:text-center max-sm:text-center max-xss:mx-4 max-sm:mx-4 md:mx-4">
          <span className="text-darkerGreen">Tour</span> travel agency is a
          private retailer or public service that provides travel and
          tourism-related services to the general public on behalf of
          accommodation or travel suppliers to offer different kinds of
          travelling packages for each destination. Our professional team have
          extended connections with travel suppliers in Azerbaijan and have
          access to exclusive deals. We can negotiate best deals for their
          clients in order to provide them with the best value. We also provide
          an array of choices relying on the spending plan.
        </p>
      </div>

      <div className="flex items-center py-20 justify-evenly xl:flex-row max-sm:flex-col sm:flex-col md:flex:col lg:flex-col">
        <div className="flex">
          <img
            className="w-[235px] h-[381px] max-xss:h-[280px] max-xss:w-[180px]"
            src={Resposibility1}
            alt={Resposibility1}
          />
          <img
            className="w-[235px] max-xss:h-[280px] max-xss:w-[180px] h-[381px] -ml-20 mt-20 max-sm:-ml-32 max-xss:-ml-35"
            src={Resposibility2}
            alt={Resposibility2}
          />
          <img
            className="w-[235px] max-xss:h-[280px] max-xss:w-[180px] h-[381px] -ml-20 mt-40 max-sm:-ml-32 max-xss:-ml-35"
            src={Resposibility3}
            alt={Resposibility3}
          />
        </div>
        <div className="lg:mt-10 md:mt-10 sm:mt-7 max-sm:mt-7">
          <h4 className="mb-16 2xl:text-6xl xl:text-5xl md:text-5xl lg:text-5xl sm:text-4xl max-sm:text-4xl text-darkerGreen">
            Responsibilities
          </h4>
          <ul className="text-3xl list-disc max-xss:text-2xl pl-7 text-black-rgba">
            <li className="pb-10 pl-3">Transportation</li>
            <li className="pb-10 pl-3 ">Meals</li>
            <li className="pl-3">Acommodation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Responsibility;
