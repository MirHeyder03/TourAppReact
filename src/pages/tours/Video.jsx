import React from "react";
import { BsYoutube } from "react-icons/bs";

const Video = () => {
  return (
    <div className="w-full">
      <a href="https://www.youtube.com/watch?v=0jK0ytvjv-E">
        <div className="bg-videoBg bg-cover h-[50vh] flex items-center justify-center w-full">
          <BsYoutube className="text-white hover:text-gray-400 w-[100px] h-[100px] tranition-all duration-200" />
        </div>
      </a>
    </div>
  );
};

export default Video;
