import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";

const PostLink = ({ data }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };
  return (
    <div className="h-[170px]">
      {" "}
      <ScrollShadow size={40} hideScrollBar className="h-[400px] shadow-black">
        {data?.map((data, index) => (
          <motion.div
            initial={{
              scale: 0.5,
            }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
            key={index}
            className="flex flex-row justify-center my-3 bg-cover bg-center"
          >
            <div className="w-[70%] h-44 bg-white rounded-xl flex flex-col justify-between items-center lg:flex-row lg:h-28  ">
              <div className=" lg:w-1/2 border-b-2 lg:border-none px-4 py-4 w-[80%] text-center  ">
                <p className="line-clamp-1 text-ellipsis overflow-hidden text-left px-2 ">
                  {data.originalUrl || ""}
                </p>
              </div>
              <div className="w-[90%]  lg:w-1/2 h-20 flex flex-col gap-2 items-center bg-center lg:flex-row lg:justify-end lg:px-6 ">
                <p className="text-primaryCyan text-ellipsis md:overflow-hidden md:line-clamp-1 ">
                  {data.shortenedUrl || ""}
                </p>

                <Button
                  className=" w-[90%] lg:w-[150px] py-5 mb-8 md:mb-0 bg-primaryCyan rounded-lg"
                  onClick={() =>
                    copyToClipboard(`https://${data.shortenedUrl}`, index)
                  }
                >
                  {copiedIndex === index ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </ScrollShadow>
    </div>
  );
};

export default PostLink;
