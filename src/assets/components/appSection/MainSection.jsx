import React from "react";
const MainSection = () => {
  return (
    <div>
      <div className="w-full ">
        {/* link input section  */}
        <div className=" w-full flex justify-center md:mt-[-80px] pb-16">
          <div className="flex flex-col md:flex-row justify-around md:px-5 md:gap-5 items-center w-[70%] h-[10rem] bg-DarkViolet rounded-xl">
            <input
              className="bg-white w-[90%]  md-[80%] xl:w-[90%] h-[50px] rounded-lg px-4"
              type="text"
              placeholder="shorten a link here..."
            />
            <button className="w-[90%]  md:w-[26%] xl:w-[26%] bg-primaryCyan h-[50px] rounded-lg">
              Shorten it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
