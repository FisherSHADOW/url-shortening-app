import React, { useEffect, useState } from "react";
import "../appSection/mainSection.css";
import PostLink from "./PostLink";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
const MainSection = () => {
  const [orginalUrl, setOrginalUrl] = useState();
  const [errorMassage, setErrorMassage] = useState();
  const [shortenedUrls, setShortenedUrls] = useState([]);

  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem("shortenedData")) || [];
    setShortenedUrls(storedUrls);
  }, []);

  const handleGenerate = async () => {
    if (!orginalUrl) {
      setErrorMassage("please enter a valid url to be shorten");
      return;
    }
    if (!orginalUrl.startsWith("https://")) {
      setErrorMassage("url must start with https:// ");
      return;
    }
    const apiUrl = "https://shrtlnk.dev/api/v2/link";

    const requestData = {
      url: orginalUrl,
    };

    const options = {
      method: "POST",
      headers: {
        "api-key": "g5AIvliLjRUWR87wb1g5v6CLALOtoKYj4gTiBepV8jnEe",
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData),
    };

    try {
      const response = await fetch(apiUrl, options);
      if (response.ok) {
        const result = await response.json();
        setErrorMassage("");

        setShortenedUrls((prev) => [
          ...prev,
          { originalUrl: orginalUrl, shortenedUrl: result.shrtlnk },
        ]);

        const updatedData = [
          ...shortenedUrls,
          { originalUrl: orginalUrl, shortenedUrl: result.shrtlnk },
        ];

        localStorage.setItem("shortenedData", JSON.stringify(updatedData));
      } else {
        console.error("Failed to shorten url");
      }
    } catch (err) {
      console.error("an error occurred:", err);
    }
  };
  return (
    <div className="relative">
      <div className="w-full ">
        {/* link input section  */}
        <motion.div
          initial={{
            opacity: 0,
            translateY: 500,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className=" w-full flex justify-center md:mt-[-80px]  pb-16 "
        >
          <div className="flex flex-col md:flex-row justify-around md:px-5 md:gap-5 items-center w-[82%] h-[10rem] bg-DarkViolet rounded-xl section__bg">
            <input
              value={orginalUrl}
              onChange={(e) => setOrginalUrl(e.target.value)}
              className="bg-white w-[90%]  md-[80%] xl:w-[90%] h-[50px] rounded-lg px-4"
              type="text"
              placeholder="shorten a link here..."
            />
            <Button
              onClick={handleGenerate}
              className="w-[90%]  md:w-[26%] xl:w-[26%] bg-primaryCyan h-[50px] rounded-lg hover:bg-lightCyan hover:text-VeryDarkViolet"
            >
              Shorten it!
            </Button>
          </div>
        </motion.div>
        {errorMassage && (
          <div className="absolute w-full text-center ">
            <p className="text-red-500 mt-[-40px]">{errorMassage}</p>
          </div>
        )}
      </div>
      {shortenedUrls.length > 0 && <PostLink data={shortenedUrls} />}
    </div>
  );
};

export default MainSection;
