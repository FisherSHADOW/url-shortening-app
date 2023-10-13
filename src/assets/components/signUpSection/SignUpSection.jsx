import React from "react";

const SignUpSection = () => {
  return (
    <div>
      <div className="w-full h-[180px] bg-DarkViolet">
        <div className="flex flex-col  justify-center items-center text-white py-10">
          <p className="text-4xl font-bold ">Boost your links today</p>
          <button className=" py-2 w-36 mt-5 bg-primaryCyan rounded-3xl text-white hover:bg-lightCyan hover:text-VeryDarkViolet">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
