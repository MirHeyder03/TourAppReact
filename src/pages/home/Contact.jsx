import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center w-full h-[49.5rem] bg-gazangul-lake  bg-no-repeat  bg-cover	font-primary">
      <div className="text-center bg-khakiDark  w-[62.1rem] h-[42.8rem] rounded-bl-[5.3rem] rounded-tr-[5.3rem] max-sm:mx-10 sm:mx-16 md:mx-24">
        <div>
          <h3 className="p-3 font-bold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl max-sm:text-3xl text-darkerGreen pt-14">
            Contact Us
          </h3>
          <p className="p-6 font-semibold text-white 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base max-sm:text-base">
            Feel free to contact us. We will back to you as soon as possible.
          </p>
        </div>
        <div className="2xl:w-[39.5rem] mx-auto max-w-xl">
          <form className="px-8 pt-6 pb-8 mb-4 text-white rounded 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base max-sm:text-base">
            <div className="mb-4">
              <input
                className="w-full px-3 py-5 leading-tight bg-transparent border border-darkerGreen rounded-xl placeholder:text-white 2xl:placeholder:text-xl xl:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-sm max-sm:placeholder:text-xs placeholder:pl-5"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full px-3 py-5 mb-3 leading-tight bg-transparent border border-darkerGreen rounded-xl placeholder:text-white 2xl:placeholder:text-xl xl:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-sm max-sm:placeholder:text-xs placeholder:pl-3"
                id="email"
                type="text"
                placeholder="Email or phone number"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="w-full px-3 py-5 mb-3 bg-transparent border resize-none border-darkerGreen rounded-xl placeholder:text-white 2xl:placeholder:text-xl xl:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-sm max-sm:placeholder:text-xs h-36 placeholder:pl-5"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="w-full px-4 py-5 text-white transition-all duration-300 border-2 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base max-sm:text-sm bg-darkerGreen border-darkerGreen rounded-xl hover:bg-transparent"
                type="submit"
              >
                Send your message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
