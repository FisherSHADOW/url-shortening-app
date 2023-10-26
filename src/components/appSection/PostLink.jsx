import React, { useState } from "react";

const PostLink = ({ data }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };
  return (
    <div>
      {data?.map((data, index) => (
        <div
          key={index}
          className="flex flex-row justify-center my-3 bg-cover bg-center"
        >
          <div className="w-[70%] h-44 bg-white  rounded-xl flex flex-col justify-between  items-center md:flex-row md:h-28  ">
            <div className=" md:w-1/2 border-b-2 md:border-none px-4 py-4 w-[80%] text-center  ">
              <p className=" text-ellipsis overflow-hidden ">
                {data.originalUrl || ""}
              </p>
            </div>
            <div className="w-[90%] md:w-1/2 h-20 flex flex-col justify-center gap-2 items-center bg-center md:flex-row md:justify-end md:px-6 ">
              <p className="text-primaryCyan   ">{data.shortenedUrl || ""}</p>
              <button
                className=" w-[90%] md:w-[150px]  py-2 mb-8 md:mb-0 bg-primaryCyan rounded-lg"
                onClick={() =>
                  copyToClipboard(`https://${data.shortenedUrl}`, index)
                }
              >
                {copiedIndex === index ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostLink;
