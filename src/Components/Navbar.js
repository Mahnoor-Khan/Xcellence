import React, { useState } from "react";
import heroImg from "../Assets/hero-img.png";
import logo from "../Assets/logo.svg";
import Hero from "./Hero";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="px-8 py-6 hidden xl:flex justify-between gap-24 items-center w-full">
          <div className="flex gap-6 flex-row justify-center items-center">
            <p className="text-white font-plus-jakarta-sans text-16 font-normal font-bold leading-5">
              Real Estate
            </p>
            <p className="text-white font-plus-jakarta-sans text-16 font-normal font-bold leading-5">
              Mortgages
            </p>
            <p className="text-white font-plus-jakarta-sans text-16 font-normal font-bold leading-5">
              Closings
            </p>
            <p className="text-white font-plus-jakarta-sans text-16 font-normal font-bold leading-5">
              Why Us
            </p>
            <p className="text-white font-plus-jakarta-sans text-16 font-normal font-bold leading-5">
              Careers
            </p>
          </div>
          <img src={logo} alt="logo" />
          <div className="flex gap-6 flex-row justify-center items-center">
            <p className="text-white font-plus-jakarta-sans text-16 font-normal font-bold leading-5">
              Agents and Loan
            </p>
            <p className="text-white font-plus-jakarta-sans text-16 font-normal font-bold leading-5">
              Earnest Deposit
            </p>
            <p className="text-white font-plus-jakarta-sans text-16 font-normal font-bold leading-5">
              Saved
            </p>
            <button className="py-4 px-8 rounded-md text-white font-plus-jakarta-sans text-4 font-normal font-bold leading-5 bg-[#7AB3DF]">
              Sign Up
            </button>
          </div>
        </div>
        <div
          className="flex xl:hidden justify-between items-center gap-8 px-8 py-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={logo} alt="logo" />
          <FiMenu
            className="text-white h-6 w-6"
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="click"
          />
        </div>
        {isOpen && (
          <div
            id="dropdown"
            className="absolute top-[45px] mt-[20px] right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Real Estate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Mortgages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Closings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Agents and Loans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnest Deposit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Saved
                </a>
              </li>
            </ul>
          </div>
        )}
        <Hero />
      </div>
    </>
  );
}
export default Navbar;
