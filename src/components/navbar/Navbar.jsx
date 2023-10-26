import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

// navbar hamburger button and menu
const Navbar = () => {
  const [open, setOpen] = useState(true);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="bg-white flex justify-center  ">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="w-full px-10 md:px-0 md:w-[80%] h-20 flex flex-row items-center justify-between "
      >
        {/* logo */}
        <div>
          <p className="text-VeryDarkViolet text-3xl font-[900] select-none">
            Shortly
          </p>
        </div>
        {/* hamburger button  */}

        <button
          className="block text-center pt-1 md:hidden "
          onClick={handleMenu}
        >
          <span className="text-GrayishViolet">
            {open == true ? <Menu size={35} /> : <X size={35} />}
          </span>
        </button>
        {/* navbar >md, lg */}
        <div className="hidden md:w-full md:flex md:flex-row md:justify-between md:items-center text-sm">
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
          {/* sign up & login */}
          <ul className="flex flex-row text-GrayishViolet font-bold gap-7 ">
            <li>
              <Button className="p-2 bg-transparent rounded-3xl hover:text-VeryDarkViolet">
                Login
              </Button>
            </li>
            <li>
              <Button className="p-2 bg-primaryCyan rounded-3xl w-32 shadow-xl text-white hover:bg-lightCyan hover:text-VeryDarkViolet">
                Sign Up
              </Button>
            </li>
          </ul>
        </div>
      </motion.div>
      {/* mobile menu */}
      {!open ? (
        <div className="w-[75%] h-[450px] md:hidden mt-36 mx-auto bg-DarkViolet shadow-VeryDarkViolet shadow-lg flex flex-col justify-center items-center  rounded-xl absolute left-2.5 right-2.5 font-bold text-xl text-white ">
          <ul className="flex flex-col justify-center items-center gap-10 text-center ">
            <li className=" cursor-pointer">Features</li>
            <li className=" cursor-pointer">Pricing</li>
            <li className=" cursor-pointer">Resources</li>
            <li>
              <hr className="w-[300px] opacity-50" />
            </li>
            <li>
              <button className="hover:text-primaryCyan">Login</button>
            </li>
            <li>
              <Button className="  bg-primaryCyan rounded-3xl w-[300px] font-bold text-xl py-6 shadow-xl text-white hover:bg-lightCyan hover:text-VeryDarkViolet hover:shadow-none">
                Sign Up
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
