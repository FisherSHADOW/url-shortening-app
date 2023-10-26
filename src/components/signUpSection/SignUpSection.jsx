import React from "react";
import "../signUpSection/signUpSection.css";
import { Button } from "@nextui-org/react";

const SignUpSection = () => {
  return (
    <div>
      <div className="w-full h-[180px] bg-DarkViolet">
        <div className="flex flex-col  justify-center items-center text-white py-10 section__bg">
          <p className="text-4xl font-bold ">Boost your links today</p>
          <Button className=" py-2 w-36 mt-5 bg-primaryCyan rounded-3xl text-white hover:bg-lightCyan hover:text-VeryDarkViolet">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
