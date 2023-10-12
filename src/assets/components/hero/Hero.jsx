import React from "react";
import working from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="bg-white">
      {/* hero start */}
      <div className="w-full h-[80vh] flex  flex-col-reverse md:flex-row justify-center items-center text-center md:justify-evenly lg:justify-between xl:justify-around md:items-center py-20 ">
        <div className="md:pl-[4.7rem] md:flex md:flex-col md:gap-1">
          <h1 className="text-5xl mt-10 md:text-5xl lg:text-6xl md:text-left md:w-[28rem] font-bold text-VeryDarkBlue">
            More than just <br />
            shorter links
          </h1>
          <h3 className=" text-center  text-[1.2rem] md:text-sm md:w-[25rem] md:text-left text-GrayishViolet mt-5">
            Build your brand's recocnition and get detailed insights on how your
            links are performing.
          </h3>
          <button className=" py-2 w-36 mt-5 bg-primaryCyan rounded-3xl text-white hover:bg-lightCyan hover:text-VeryDarkViolet">
            Get Started
          </button>
        </div>

        <div>
          <img
            className="w-[700px] ml-[2rem] md:w-[700px]  "
            src={working}
            alt=" drawing of a person working on computer "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
