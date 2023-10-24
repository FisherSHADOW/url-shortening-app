import React from "react";

const PostLink = ({ data }) => {
  const bg1Url = "../../images/bg-shorten-desktop.svg";
  return (
    <div className="flex justify-center my-3 bg-cover bg-center">
      <div className="w-[70%] h-44 bg-white  rounded-xl flex flex-col justify-between  items-center md:flex-row md:h-28  ">
        <div className=" md:w-1/2 border-b-2 md:border-none px-4 py-4 w-[80%] text-center  ">
          <p className=" text-ellipsis overflow-hidden ">
            https://www.yasdasdasdasdasdasdasdasdsadasoutube.cosadasdasdasdasdm
          </p>
        </div>
        <div className="w-[90%] md:w-1/2 h-20 flex flex-col justify-center gap-2 items-center bg-center md:flex-row md:justify-end md:px-6 ">
          <p className="text-primaryCyan">www.guthub.com</p>
          <button className=" w-[90%] md:w-[150px]  py-2 mb-8 md:mb-0 bg-primaryCyan rounded-lg">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostLink;
