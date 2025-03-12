import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as JavaChipLogo } from "../../assets/icons/Javachip.svg";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as YouTube } from "../../assets/icons/YouTube.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/Linkedin.svg";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  const [contactData, setContactData] = useState("");
  const [socialData, setSocialData] = useState("");
  const url = "https://admintour.thejavachip.com/api/setting";
  useEffect(() => {
    getContactsData();
    getSocialData();
  }, []);
  const getContactsData = async () => {
    await axios
      .get(url)
      .then((response) => {
        setContactData(response.data.contacts);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getSocialData = async () => {
    await axios
      .get(url)
      .then((response) => {
        setSocialData(response.data.socials);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sticky px-5 pb-5 pt-7 bg-darkerGreen md:px-0 max-w">
      <div
        id="container1"
        className="flex justify-around text-base text-white max-sm:flex-col max-sm:items-center max-sm:gap-10"
      >
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col max-sm:flex-col justify-evenly 2xl:gap-20 lg:gap-16 md:gap-10 sm:gap-10 max-sm:gap-10">
          <div id="col1" className="">
            <NavLink
              exact
              to="/"
              className="font-bold select-none 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl max-sm:text-2xl 2xl:mb-11 text-green font-logo"
            >
              Tour.
            </NavLink>
            <p className="max-w-sm mt-10 2xl:text-base xl:text-base lg:text-sm md:text-sm max-sm:text-base">
              {contactData?.address}
            </p>
          </div>
          <div className="flex flex-row 2xl:gap-20 xl:gap-16 lg:gap-10 md:gap-10 sm:gap-7 max-sm:gap-10 text-start ">
            <div id="col2" className="flex flex-col gap-8">
              <p className="text-xl font-semibold ">Quick Links</p>
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-sm ">
                  About
                </Link>
                <Link to="/" className="text-sm ">
                  Tours
                </Link>
                <Link to="/" className="text-sm ">
                  Gallery
                </Link>
                <Link to="/" className="text-sm ">
                  How it works
                </Link>
              </div>
            </div>
            <div id="col3" className="flex flex-col gap-8">
              <p className="text-xl font-semibold ">Contact us</p>
              <div className="flex flex-col gap-4">
                <a
                  className="text-sm "
                  href="https://goo.gl/maps/XsBXEinxeUDXCT9q9"
                >
                  {contactData?.address}
                </a>
                <a className="text-sm " href={"tel:" + contactData[1]?.phones}>
                  {contactData?.phones}
                </a>
                <a
                  className="text-sm "
                  href={"mailto:" + contactData?.email}
                  to="/"
                >
                  {contactData?.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="col4"
          className="flex flex-col 2xl:gap-16 xl:gap-16 md:gap-10 max-sm:gap-10 sm:gap-10 md:items-center lg:items-center sm:items-center max-sm:items-center 2xl:items-start xl:items-start"
        >
          <p className="text-xl font-semibold">Social Media</p>
          <div className="flex justify-center gap-5 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col max-sm:flex-row">
            <a href={socialData?.facebook}>
              <Facebook />
            </a>
            <a href={socialData?.instagram}>
              <Instagram />
            </a>
            <a href={socialData?.youtube}>
              <YouTube />
            </a>
            <a href={socialData?.linkedin}>
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
      <div
        id="container2"
        className="flex flex-col items-center justify-between px-20 text-white pt-7 text-thin md:flex-row max-xss:gap-4 max-xss:text-center max-sm:text-center max-sm:gap-4 max-xss:px-0"
      >
        <p className="text-base text-thin">
          Copyright © 2022 Tour LLC All Rights Reserved
        </p>
        <p className="flex flex-row items-center justify-center tex-base">
          Site created by: <JavaChipLogo style={{ width: "8em" }} />
        </p>
      </div>
    </div>
  );
};

export default Footer;
