import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-20 flex flex-row items-center justify-between px-10 md:px-20">
        <div>
          <p className="text-VeryDarkViolet text-3xl font-[900]">Shortly</p>
        </div>

        <div className="hidden md:block md:w-full md:flex md:flex-row md:justify-between md:items-center text-sm">
          <ul className="flex flex-row text-GrayishViolet font-bold gap-7 px-10">
            <li className="cursor-pointer hover:text-VeryDarkViolet">
              Features
            </li>
            <li className="cursor-pointer hover:text-VeryDarkViolet">
              Pricing
            </li>
            <li className="cursor-pointer hover:text-VeryDarkViolet">
              Resources
            </li>
          </ul>

          <ul className="flex flex-row text-GrayishViolet font-bold gap-7 px-10">
            <li>
              <button className="p-2 hover:text-VeryDarkViolet">Login</button>
            </li>
            <li>
              <button className="p-2  bg-primaryCyan rounded-3xl w-32 text-white hover:bg-lightCyan hover:text-VeryDarkViolet ">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
