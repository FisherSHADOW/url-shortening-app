import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";

const PostLink = ({ data }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };
  return (
    <ScrollShadow>
      {data?.map((data, index) => (
        <div
          key={index}
          className="flex flex-row justify-center my-3 bg-cover bg-center"
        >
          <div className="w-[70%] h-44 bg-white rounded-xl flex flex-col justify-between items-center lg:flex-row lg:h-28  ">
            <div className=" lg:w-1/2 border-b-2 lg:border-none px-4 py-4 w-[80%] text-center  ">
              <p className="line-clamp-1 text-ellipsis overflow-hidden text-left px-2 ">
                {data.originalUrl || ""}
              </p>
            </div>
            <div className="w-[90%]  lg:w-1/2 h-20 flex flex-col  gap-2 items-center bg-center lg:flex-row lg:justify-end lg:px-6 ">
              <p className="text-primaryCyan text-ellipsis overflow-hidden line-clamp-1 ">
                {data.shortenedUrl || ""}
              </p>

              <Button
                className=" w-[90%] lg:w-[150px]  py-5 mb-8 md:mb-0 bg-primaryCyan rounded-lg"
                onClick={() =>
                  copyToClipboard(`https://${data.shortenedUrl}`, index)
                }
              >
                {copiedIndex === index ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </ScrollShadow>
  );
};

export default PostLink;
