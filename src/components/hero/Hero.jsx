import React from "react";
import { motion } from "framer-motion";
import working from "../../assets/images/illustration-working.svg";
import { Button } from "@nextui-org/react";

const Hero = () => {
  return (
    <div className="bg-white flex justify-center ">
      {/* hero start */}
      <div className=" w-full px-14 md:px-0 md:w-[80%] h-[80vh] flex  flex-col-reverse justify-center items-center text-center py-20 md:grid md:grid-cols-2 md:justify-around md:gap-3">
        <motion.div
          initial={{
            scale: 0,
            translateX: -500,
          }}
          animate={{
            scale: 1,
            translateX: 0,
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="md:flex md:flex-col md:gap-1 md:w-[1/2] lg:w-[1/2] xl:w-[1/2] "
        >
          <h1 className="text-5xl mt-10 md:text-4xl lg:text-5xl md:text-left md:w-[28rem] font-bold text-VeryDarkBlue">
            More than just <br />
            shorter links
          </h1>
          <h3 className=" text-center  text-[1.2rem] md:text-sm md:w-[20rem] md:text-left lg:w-[25rem] text-GrayishViolet mt-5">
            Build your brand's recocnition and get detailed insights on how your
            links are performing.
          </h3>
          <Button className="py-2 w-36 mt-5 shadow-xl bg-primaryCyan rounded-3xl text-white hover:bg-lightCyan hover:text-VeryDarkViolet">
            Get started
          </Button>
        </motion.div>

        <motion.div
          initial={{
            scale: 0,
            translateX: 500,
          }}
          animate={{
            scale: 1,
            translateX: 0,
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
        >
          <img
            className=" w-[800px]"
            src={working}
            alt=" drawing of a person working on computer "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
