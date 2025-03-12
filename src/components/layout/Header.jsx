import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Header = ({ color, currentPage }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div className="w-full select-none">
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="flex items-center justify-between">
          <div className="ml-2">
            <NavLink
              exact
              to="/"
              className="text-4xl font-bold select-none text-green font-logo"
            >
              Tour.
            </NavLink>
          </div>
          <div id="NavItems" className="hidden space-x-6 md:flex">
            <NavLink
              exact
              to={"/"}
              className={
                navbar
                  ? `header-link ${currentPage === 1 && "border-green"}`
                  : `header-link active ${currentPage === 1 && "border-green"}`
              }
              style={navbar ? { color: "white" } : { color: color }}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to={"/tours"}
              className={
                navbar
                  ? `header-link ${currentPage === 2 && "border-green"}`
                  : `header-link active ${currentPage === 2 && "border-green"}`
              }
              style={navbar ? { color: "white" } : { color: color }}
            >
              Tours
            </NavLink>
            <NavLink
              exact
              to={"/gallery"}
              className={
                navbar
                  ? `header-link ${currentPage === 3 && "border-green"}`
                  : `header-link active ${currentPage === 3 && "border-green"}`
              }
              style={navbar ? { color: "white" } : { color: color }}
              onClick={() => setIsNavOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              exact
              to={"/whyUs"}
              className={
                navbar
                  ? `header-link ${currentPage === 4 && "border-green"}`
                  : `header-link active ${currentPage === 4 && "border-green"}`
              }
              style={navbar ? { color: "white" } : { color: color }}
              onClick={() => setIsNavOpen(false)}
            >
              Why us
            </NavLink>
            <NavLink
              exact
              to={"/contact"}
              className={
                navbar
                  ? `header-link ${currentPage === 5 && "border-green"}`
                  : `header-link active ${currentPage === 5 && "border-green"}`
              }
              style={navbar ? { color: "white" } : { color: color }}
              onClick={() => setIsNavOpen(false)}
            >
              Contact
            </NavLink>
          </div>
          <div
            id="SearchInput"
            className="flex text-sm search-box md:focus:max-w-[100px] 2xl:focus:w-[300px] lg:focus:w-[250px] focus:w-[60px]"
          >
            <button className="btn-search">
              <AiOutlineSearch
                style={navbar ? { color: "white" } : { color: color }}
              />
            </button>
            <input
              type="text"
              className={`input-search border hover:border-2`}
              placeholder="Search"
              style={{ color: color, "::placeholder": color }}
            />
          </div>
          <div id="LanguageSelector" className="hidden md:flex">
            <select
              className={`text-${
                navbar ? "white" : color
              } flex items-center pr-1 text-xl bg-transparen text- size-4`}
            >
              <option value="eng" style={{ color: "black" }}>
                Eng
              </option>
              <option value="aze" style={{ color: "black" }}>
                Aze
              </option>
              <option value="rus" style={{ color: "black" }}>
                Rus
              </option>
            </select>
          </div>
          <div className="flex md:hidden">
            <button onClick={() => setIsNavOpen(true)}>
              <AiOutlineMenu
                className={`text-3xl cursor-pointer max-xss:mr-4 font-bold text-${color}`}
              />
            </button>
            <div
              id="NavItems"
              className={isNavOpen ? "showMenuNav" : "hideMenuNav"}
            >
              <div className="ml-auto mr-16">
                <button onClick={() => setIsNavOpen(false)}>
                  <ImCross className="text-white" />
                </button>
              </div>
              <NavLink
                exact
                to={"/"}
                className={
                  navbar
                    ? `header-link ${currentPage === 1 && "border-green"}`
                    : `header-link active ${
                        currentPage === 1 && "border-green"
                      }`
                }
                style={{ color: "white" }}
              >
                Home
              </NavLink>
              <NavLink
                exact
                to={"/tours"}
                className={
                  navbar
                    ? `header-link ${currentPage === 2 && "border-green"}`
                    : `header-link active ${
                        currentPage === 2 && "border-green"
                      }`
                }
                style={{ color: "white" }}
              >
                Tours
              </NavLink>
              <NavLink
                exact
                to={"/gallery"}
                className={
                  navbar
                    ? `header-link ${currentPage === 3 && "border-green"}`
                    : `header-link active ${
                        currentPage === 3 && "border-green"
                      }`
                }
                style={{ color: "white" }}
              >
                Gallery
              </NavLink>
              <NavLink
                exact
                to={"/whyUs"}
                className={
                  navbar
                    ? `header-link ${currentPage === 4 && "border-green"}`
                    : `header-link active ${
                        currentPage === 4 && "border-green"
                      }`
                }
                style={{ color: "white" }}
              >
                Why us
              </NavLink>
              <NavLink
                exact
                to={"/contact"}
                className={
                  navbar
                    ? `header-link ${currentPage === 5 && "border-green"}`
                    : `header-link active ${
                        currentPage === 5 && "border-green"
                      }`
                }
                style={{ color: "white" }}
              >
                Contact
              </NavLink>
              <div id="LanguageSelector" className="">
                <select
                  className={`text-white flex items-center text-xl bg-transparent`}
                >
                  <option value="eng" className="text-lg text-black">
                    Eng
                  </option>
                  <option value="aze" className="text-lg text-black">
                    Aze
                  </option>
                  <option value="rus" className="text-lg text-black">
                    Rus
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
