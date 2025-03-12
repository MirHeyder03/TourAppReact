import React from "react";
import AgencyInfoImg from "../.././assets/img/AgencyInfoImg.png";
const AgencyInfo = () => {
  return (
    <div className="flex items-center gap-5 2xl:flex-row xl:flex-row lg:flex-row md:flex-col max-sm:flex-col sm:flex-col py-7 bg-khaki justify-evenly 2xl:text-start xl:text-start lg:text-start md:text-center sm:text-center max-sm:text-center">
      <div>
        <img
          src={AgencyInfoImg}
          alt={AgencyInfoImg}
          className="2xl:w-[470px] 2xl:h-[696px] xl:w-[440px] xl:h-[660px] lg:w-[420px] lg:h-[600px] md:w-[420px] md:h-[570px] sm:w-[400px] sm:h-[550px] max-sm:w-[440px] max-sm:h-[600px]"
        />
      </div>
      <div>
        <p className="max-w-xl text-white max-xss:max-w-md 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-lg max-sm:text-base ">
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
    </div>
  );
};

export default AgencyInfo;
