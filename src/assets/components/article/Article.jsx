import React from "react";
import brandIcon from "../../images/icon-brand-recognition.svg";
import detailedIcon from "../../images/icon-detailed-records.svg";
import fullyCustomizeIcon from "../../images/icon-fully-customizable.svg";

const Article = () => {
  return (
    <div>
      {/* article start */}
      <div className="w-full flex flex-col justify-center items-center">
        {/* article header */}
        <div className="flex flex-col justify-center items-center mt-20">
          <h2 className="font-bold text-4xl text-VeryDarkBlue text-center">
            Advance Statistics
          </h2>
          <p className="px-20 text-center mt-5 text-GrayishViolet">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        {/* line */}
        <div className="h[500px] w-[10px]  "></div>
        {/* article cards  */}
        <div className="flex flex-col justify-center items-center gap-y-24 mt-24 pb-24">
          <div className="w-[70%] h-[250px] flex flex-col justify-around items-center bg-white rounded-lg ">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-DarkViolet mt-[-60px] ">
              <img src={brandIcon} alt="" />
            </div>
            <p className="text-center px-2 font-bold text-2xl text-VeryDarkViolet">
              Brand recognition
            </p>
            <p className="text-center mt-[-20px] px-4 text-GrayishViolet">
              Boost your brand recognition with each click.Generic links dont
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="w-[70%] h-[250px] flex flex-col justify-around items-center bg-white rounded-lg ">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-DarkViolet mt-[-60px] ">
              <img src={detailedIcon} alt="" />
            </div>
            <p className="text-center px-2 font-bold text-2xl text-VeryDarkViolet">
              Detailed Records
            </p>
            <p className="text-center mt-[-20px] px-4 text-GrayishViolet">
              Gain insights into who is clicking your links.knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="w-[70%] h-[250px] flex flex-col justify-around items-center bg-white rounded-lg ">
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-DarkViolet mt-[-60px] ">
              <img src={fullyCustomizeIcon} alt="" />
            </div>
            <p className="text-center px-2 font-bold text-2xl text-VeryDarkViolet">
              Fully customizable
            </p>
            <p className="text-center mt-[-20px] px-4 text-GrayishViolet">
              improve brand awareness and content discoverability through
              customizable links. supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
