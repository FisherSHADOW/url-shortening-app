import React from "react";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import facebook from "../../images/icon-facebook.svg";

const Footer = () => {
  return (
    <div>
      {/* footer start */}
      <div className="w-full h-[700px] md:h-[270px] bg-VeryDarkViolet flex flex-col justify-center items center text-white md:flex-row md:justify-center md:px-5 lg:gap-28 xl:gap-56">
        {/*     */}
        <div className="flex justify-center">
          <p className="text-4xl font-bold pt-12 md:pt-10 md:self-start ">
            Shortly
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-10  md:flex-row md:just md:mt-0 md:gap-14 md:justify-center md:items-start md:py-12 md:w-[600px]">
          <div className="flex flex-col items-center gap-5 ">
            <p className="font-bold ">Features</p>
            <ul className="text-center text-secondary flex flex-col gap-2 ">
              <li className="cursor-pointer hover:text-white">
                Link shortening
              </li>
              <li className="cursor-pointer hover:text-white">Branded Links</li>
              <li className="cursor-pointer hover:text-white">Analytics</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="font-bold ">Resources</p>
            <ul className="text-center text-secondary flex flex-col gap-2  ">
              <li className="cursor-pointer hover:text-white">Blog</li>
              <li className="cursor-pointer hover:text-white">Developers</li>
              <li className="cursor-pointer hover:text-white">Support</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="font-bold ">Company</p>
            <ul className="text-center text-secondary flex flex-col gap-2">
              <li className="cursor-pointer hover:text-white">About</li>
              <li className="cursor-pointer hover:text-white">Our Team</li>
              <li className="cursor-pointer hover:text-white">Careers</li>
              <li className="cursor-pointer hover:text-white">Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 w-full py-12 md:w-[300px] md:self-start ">
          <img className="cursor-pointer" src={facebook} alt="#" />
          <img className="cursor-pointer" src={twitter} alt="#" />
          <img className="cursor-pointer" src={pinterest} alt="#" />
          <img className="cursor-pointer" src={instagram} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
