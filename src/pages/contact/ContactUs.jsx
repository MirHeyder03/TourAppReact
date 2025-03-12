import React from "react";

const ContactUs = () => {
  return (
    <div className="flex items-center pt-20 2xl:flex-row md:flex-col xl:flex-row lg:flex-col sm:flex-col max-sm:flex-col max-sm:mx-12 sm:mx-16 max-xss:mx-12 md:mx-20 2xl:justify-center">
      <div className="select-none	flex items-center justify-center  h-[49.5rem] font-primary">
        <div className="text-center bg-khakiDark  h-[720px] rounded-bl-[5.3rem] max-xss:rounded-tr-[5.3rem] max-sm:rounded-tr-[5.3rem]">
          <div>
            <h3 className="p-3 font-bold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl max-sm:text-3xl text-darkerGreen pt-14">
              Contact Us
            </h3>
            <p className="p-6 font-semibold text-white 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base max-sm:text-base">
              Feel free to contact us. We will back to you as soon as possible.
            </p>
          </div>
          <div className="max-w-xl md:mx-auto">
            <form className="px-8 pt-6 pb-8 mb-4 text-xl text-white rounded select-none">
              <div className="mb-4">
                <input
                  className="w-full px-3 py-5 leading-tight bg-transparent border border-darkerGreen rounded-xl placeholder:text-white l:placeholder:text-xl xl:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-base max-sm:placeholder:text-base placeholder:pl-5"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-6">
                <input
                  className="w-full px-3 py-5 mb-3 leading-tight bg-transparent border border-darkerGreen rounded-xl placeholder:text-white l:placeholder:text-xl xl:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-base max-sm:placeholder:text-base placeholder:pl-3"
                  id="email"
                  type="text"
                  placeholder="Email or phone number"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="w-full px-3 py-5 mb-3 bg-transparent border resize-none border-darkerGreen rounded-xl placeholder:text-white l:placeholder:text-xl xl:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-base max-sm:placeholder:text-base h-36 placeholder:pl-5"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="w-full px-4 py-5 text-white border select-none 2xl:placeholder:text-xl xl:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-base max-sm:placeholder:text-base bg-darkerGreen border-darkerGreen rounded-xl 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base max-sm:text-base"
                  type="submit"
                >
                  Send your message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="mapouter flex items-center justify-center rounded-tr-[5.3rem] 2xl:h-[745px] max-sm:w-[400px] sm:w-[450px] md:w-[500px] bg-none overflow-hidden	max-w-lg mt-6 max-xss:w-[300px] max-xss:rounded-br-[5.3rem] max-xss:rounded-bl-[5.3rem] max-xss:rounded-tl-[5.3rem]">
        <div class="gmap_canvas">
          <iframe
            title="test"
            width="515"
            height="720"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=5%20A.Azizbayov&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="10"
            marginwidth="0"
          ></iframe>
          <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
          <a href="https://www.embedgooglemap.net" className="opacity-0">
            .
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
